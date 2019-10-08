const path = require('path')

const slugify = text => text.toLowerCase()
  .replace(/ /g, '-')
  .replace(/[^\w-]+/g, '')

exports.onCreateNode = ({ node , actions}) => {
  const { createNodeField } = actions;
  const slugSet = new Set([]);
  if (node.internal.type === `ContentfulBlogPost`) {
      let newSlug = slugify(node.title);
      if (slugSet.has(newSlug)) {
        let pos = 1;
        while(true) {
          if (!slugSet.has(`${newSlug}-${pos}`)){
            newSlug = `${newSlug}-${pos}`;
            break
          }
        }
      }
      createNodeField({
        name: "slug",
        node,
        value: newSlug
      });
      slugSet.add(newSlug);
  }
}

exports.createPages = async ({ graphql, actions, reporter}) => {
  console.log('#################### start');
  const { createPage } = actions;
  const result = await graphql(`
  query {
    allContentfulBlogPost(filter: {draft:{eq: false}}) {
      edges {
        node {
          author {
            name
            lastName
            firstName
            avatar {
                file {
                    url
                }
            }
          }
          body {
              body
              internal {
                  content
              }
              childMarkdownRemark {
                  excerpt(format: PLAIN, pruneLength: 100, truncate: true)
              }
          }
          createdAt(fromNow: true)
          description {
              description
          }
          heroImage {
              file {
                  url
              }
          }
          publishDate(fromNow: true)
          title
          tags
          category
          description {
              description
          }
          fields {
              slug
          }
        }
      }
    }
  }`);
  if (result.errors) {
    reporter.panicOnBuild('Error: loading create page query')
  }
  const posts = result.data.allContentfulBlogPost.edges;
  posts.forEach(({ node }, index) => {
    createPage({
      path: `blog/${node.fields.slug}/`,
      component: path.resolve(`./src/templates/blogDetail.js`),
      context: {slug: node.fields.slug}
    })
  })
}