import React from "react"
import {graphql} from "gatsby"
import Layout from "../layouts/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import useStyles from "../styles/style"
import FeaturedPost from "../components/FeaturedPost"
import SubFeaturedPost from "../components/SubFeaturedPost"
import PostsView from "../components/PostsView"


export const query = graphql`
    query MyQuery {
        featured: allContentfulBlogPost(filter: {draft: {eq: false}, featured: {eq: true}}) {
            edges {
                node {
                    author {
                        name
                    }
                    description {
                        description
                    }
                    heroImage {
                        file {
                            url
                        }
                    }
                    slug
                    title
                }
            }
        }
        subFeatured: allContentfulBlogPost(filter: {subFeature: {eq: true}, draft: {eq: false}}) {
            edges {
                node {
                    author {
                        name
                    }
                    description {
                        description
                    }
                    heroImage {
                        file {
                            url
                        }
                    }
                    slug
                    title
                    publishDate(formatString: "MMMM DD, YYYY")
                }
            }
        }
        otherPosts: allContentfulBlogPost(filter: {subFeature: {eq: false}, featured: {eq: false}, draft: {eq: false}}) {
            edges {
                node {
                    author {
                        name
                    }
                    body {
                        body
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
                    slug
                    publishDate(fromNow: true)
                    title
                    tags
                    category
                }
            }
        }
    }
`

const extractFeaturedPost = node => ({
    author: node.author.name,
    description: node.description.description,
    imgUrl: node.heroImage.file.url,
    slug: node.slug,
    title: node.title
  });

const extractSubFeaturedPost = (edges) => {
  let ret = [];
  edges.forEach(edge => {
    const {title, slug, publishDate} = edge.node;
    const imgUrl = edge.node.heroImage.file.url;
    const {description} = edge.node.description;
    ret.push({title, slug, publishDate, imgUrl, description});
  });
  return ret;
}

const IndexPage = ({ data }) => {
  const {featured, otherPosts, subFeatured} = data;
  const featuredPost = extractFeaturedPost(featured.edges[0].node);
  const subFeaturedPost = extractSubFeaturedPost(subFeatured.edges);
  let posts = [];
  console.log(otherPosts);
  return (
  <Layout>
    <SEO title="Home" />
    <FeaturedPost post={featuredPost}/>
    <SubFeaturedPost posts={subFeaturedPost}/>
    <PostsView posts={posts} />
  </Layout>
)}

export default IndexPage
