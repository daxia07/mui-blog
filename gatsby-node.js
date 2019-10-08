const path = require('path')

const slugify = text => text.toLowerCase()
  .replace(/ /g, '-')
  .replace(/[^\w-]+/g, '')

exports.onCreateNode = ({ node , getNode, actions}) => {
  const { createNodeField } = actions;
  const slugSet = new Set([]);
  if (node.internal.type === `ContentfulBlogPost`) {
      let newSlug = slugify(node.title);
      if (slugSet.has(newSlug)) {
        let pos = 1;
        while(true) {
          if (!slugSet.has(`${newSlug}-${pos}`)){
            newSlug = `${newSlug}-${pos}`;
            console.log('$$$$$$$$$$$$$$');
            console.log(newSlug);
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
      console.log('$$$$$$$$$$$$$$');
      console.log(newSlug);
  }
};