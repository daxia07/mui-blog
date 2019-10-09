export const extractFeaturedPost = node => ({
  author: node.author.name,
  description: node.description.description,
  imgUrl: node.heroImage.file.url,
  slug: node.fields.slug,
  title: node.title
});

export const extractSubFeaturedPost = (edges) => {
  let ret = [];
  edges.forEach(edge => {
    const {title, publishDate} = edge.node;
    const slug = edge.node.fields.slug;
    const imgUrl = edge.node.heroImage.file.url;
    const {description} = edge.node.description;
    ret.push({title, slug, publishDate, imgUrl, description});
  });
  return ret;
}

export const extractOtherPosts = (edges) => {
  let ret = [];
  edges.forEach(edge => {
    const {createdAt, category, tags, title, textType} = edge.node;
    const slug = edge.node.fields.slug;
    const imgUrl = edge.node.heroImage.file.url;
    const {name, firstName, lastName} = edge.node.author;
    const avatar = edge.node.author.avatar.file.url;
    const {body} = edge.node.body;
    const {excerpt} = edge.node.body.childMarkdownRemark;
    const {description} = edge.node.description;
    ret.push({createdAt, category, slug, tags, title, imgUrl, body, avatar,
      name, firstName, lastName, description, excerpt, textType});
  });
  return ret;
}

export const extractOnePost = node => {
    const { createdAt, category, tags, title,
      fields:{slug}, heroImage:{file:{url: imgUrl}},
      author:{name, firstName, lastName, avatar:{file:{url:avatar}},
        shortBio:{childMarkdownRemark:{excerpt:bio}}},
      body:{body, childMarkdownRemark:{excerpt, timeToRead, wordCount:{words}}},
      description:{description}} = node;
    return {createdAt, category, slug, tags, title, imgUrl, body, avatar,
      name, firstName, lastName, description, excerpt, bio, words, timeToRead};
}