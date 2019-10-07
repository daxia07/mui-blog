import React from "react"
import {graphql} from "gatsby"
import Layout from "../layouts/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import useStyles from "../styles/style"
import FeaturedPost from "../components/FeaturedPost"
import SubFeaturedPost from "../components/SubFeaturedPost"
import PostsView from "../components/PostsView"


const featuredPosts = [
  {
    imgUrl: "https://source.unsplash.com/random",
    imgTitle: "image Title",
    slug: "1",
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    imgUrl: "https://source.unsplash.com/random",
    imgTitle: "image Title",
    slug: "2",
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];

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

const IndexPage = ({ data }) => {
  const {featured, otherPosts, subFeatured} = data;
  // extract data from featured post
  const featuredPost = extractFeaturedPost(featured.edges[0].node);
  let posts = [];
  console.log(data);
  return (
  <Layout>
    <SEO title="Home" />
    <FeaturedPost post={featuredPost}/>
    <SubFeaturedPost posts={featuredPosts}/>
    <PostsView posts={posts} />
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
    {/*  <Image />*/}
    {/*</div>*/}
  </Layout>
)}

export default IndexPage
