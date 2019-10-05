import React from "react"
import {graphql} from "gatsby"
import Layout from "../layouts/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import useStyles from "../styles/style"
import FeaturedPost from "../components/FeaturedPost"
import SubFeaturedPost from "../components/SubFeaturedPost"
import PostsView from "../components/PostsView"

//dummy data
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
    query MarkDownBlog {
        allMarkdownRemark(filter: {parent: {}}) {
            edges {
                node {
                    rawMarkdownBody
                    parent {
                        ... on File {
                            name
                        }
                    }
                }
            }
        }
    }`


const IndexPage = ({data}) => {
  //test module
  let posts = [];
  const mdPosts = data.allMarkdownRemark.edges;
  mdPosts.forEach(ele => {
    if (ele.node.parent.name) {
      posts.push(ele.node.rawMarkdownBody);
    }
  })
  return (
  <Layout>
    <SEO title="Home" />
    <FeaturedPost/>
    <SubFeaturedPost posts={featuredPosts}/>
    <PostsView posts={posts} />
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
    {/*  <Image />*/}
    {/*</div>*/}
  </Layout>
)}

export default IndexPage
