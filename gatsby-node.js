const path = require('path')
const _ = require('lodash')

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
  const { createPage } = actions;
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
  }`);
  if (result.errors) {
    reporter.panicOnBuild('Error: loading create page query')
  }
  const posts = result.data.allContentfulBlogPost.edges;
  console.log(posts);
  console.log('#################### start');
  const categories = _.chain(posts).map(e => e.node.category).uniq().value();
  console.log(categories);
  posts.forEach(({ node }, index) => {
    createPage({
      path: `blog/${node.fields.slug}/`,
      component: path.resolve(`./src/templates/blogDetail.js`),
      context: {slug: node.fields.slug}
    })
  });
  categories.forEach((cat, index) => {
    if (cat) {
      createPage({
        path: `category/${cat}/`,
        component: path.resolve('./src/templates/category.js'),
        context: {category: cat}
      })
    }
  });
}