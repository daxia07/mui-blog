const path = require("path")
const _ = require("lodash")

const slugify = text => text.toLowerCase().replace(/\W/g, " ").trim().replace(/ +/g, '-')


exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  const slugSet = new Set([])
  if (node.internal.type === `ContentfulBlogPost`) {
    let newSlug = slugify(node.title)
    if (slugSet.has(newSlug)) {
      let pos = 1
      while (true) {
        if (!slugSet.has(`${newSlug}-${pos}`)) {
          newSlug = `${newSlug}-${pos}`
          break
        }
      }
    }
    createNodeField({
      name: "slug",
      node,
      value: newSlug,
    })
    slugSet.add(newSlug)
  }
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"
    // Update the page.
    createPage(page)
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
  query {
    allContentfulBlogPost(filter: {draft:{eq: false}}) {
      edges {
        node {
          author {
            name
          }
          textType
          publishDate(fromNow: true)
          title
          tags
          category
          fields {
              slug
          }
        }
      }
    }
  }`)
  if (result.errors) {
    reporter.panicOnBuild("Error: loading create page query")
  }
  const posts = result.data.allContentfulBlogPost.edges
  const categories = _.chain(posts).map(e => e.node.category).uniq().value()
  const users = _.chain(posts).map(e => e.node.author.name).uniq().value()
  let tagList = []
  posts.forEach(ele => {
    tagList = [...ele.node.tags, ...tagList]
  })
  tagList = _.uniq(tagList)
  posts.forEach(({ node }, index) => {
    createPage({
      path: `blog/${node.fields.slug}/`,
      component: path.resolve(`./src/templates/blogDetail.js`),
      context: { slug: node.fields.slug },
    })
  })
  categories.forEach((cat, index) => {
    if (cat) {
      createPage({
        path: `${cat}/`,
        component: path.resolve("./src/templates/categoryPosts.js"),
        context: { category: cat },
      })
    }
  })
  users.forEach((user, index) => {
    if (user) {
      createPage({
        path: `user/${user}/`,
        component: path.resolve("./src/templates/userPosts.js"),
        context: { name: user },
      })
    }
  })
  tagList.forEach((tag, index) => {
    if (tag) {
      createPage({
        path: `tags/${tag}/`,
        component: path.resolve("./src/templates/tagPosts.js"),
        context: { tag: tag },
      })
    }
  })
}

exports.onCreateWebpackConfig = ({ getConfig, stage, actions, loaders }) => {
  const config = getConfig()
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    }
  }
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}