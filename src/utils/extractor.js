export const extractFeaturedPost = node => ({
  author: node.author.name,
  description: node.description.description,
  imgUrl: node.heroImage.file.url,
  slug: node.slug,
  title: node.title
});

export const extractSubFeaturedPost = (edges) => {
  let ret = [];
  edges.forEach(edge => {
    const {title, slug, publishDate} = edge.node;
    const imgUrl = edge.node.heroImage.file.url;
    const {description} = edge.node.description;
    ret.push({title, slug, publishDate, imgUrl, description});
  });
  return ret;
}

export const extractOtherPosts = (edges) => {
  let ret = [];
  edges.forEach(edge => {
    console.log(edge);
    const {createdAt, category, slug, tags, title} = edge.node;
    const imgUrl = edge.node.heroImage.file.url;
    const {name, firstName, lastName} = edge.node.author;
    const avatar = edge.node.author.avatar.file.url;
    const {body} = edge.node.body;
    const {excerpt} = edge.node.body.childMarkdownRemark;
    const {description} = edge.node.description;
    ret.push({createdAt, category, slug, tags, title, imgUrl, body, avatar,
      name, firstName, lastName, description, excerpt});
  });
  return ret;
}