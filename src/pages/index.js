import React from "react"
import {graphql} from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import FeaturedPost from "../components/FeaturedPost"
import SubFeaturedPost from "../components/SubFeaturedPost"
import PostsView from "../components/PostsView"
import {extractFeaturedPost, extractSubFeaturedPost, extractOtherPosts} from "../utils/extractor"
import { Grid } from "@material-ui/core"
import Sidebar from "../layouts/Sidebar"
import useStyles from "../styles/style"


export const query = graphql`
    query IndexQuery {
        featured: allContentfulBlogPost(filter: {draft: {eq: false}, featured: {eq: true}}, sort: {fields: updatedAt, order: DESC}, limit: 1) {
            edges {
                node {
                    ...BlogFeature
                }
            }
        }
        subFeatured: allContentfulBlogPost(filter: {subFeature: {eq: true}, draft: {eq: false}}, sort: {fields: updatedAt, order: DESC}, limit:2) {
            edges {
                node {
                    ...BlogSubFeature
                }
            }
        }
        otherPosts: allContentfulBlogPost(filter: {subFeature: {eq: false}, featured: {eq: false}, draft: {eq: false}}, sort: {fields: [updatedAt,viewNumber ], order: DESC}) {
            edges {
                node {
                    ...BlogBasic
                }
            }
        }
        topTrends:allContentfulBlogPost(filter: {draft: {eq: false}}, sort: {fields: [updatedAt,viewNumber], order: DESC}) {
            edges {
                node {
                    heartedNumber
                    title
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

const IndexPage = ({ data }) => {
  const {featured, otherPosts, subFeatured, topTrends} = data;
  const featuredPost = extractFeaturedPost(featured.edges[0].node);
  const subFeaturedPost = extractSubFeaturedPost(subFeatured.edges);
  const posts = extractOtherPosts(otherPosts.edges);
  console.log(topTrends);
  return (
  <Layout>
    <SEO title="Home" />
    <FeaturedPost post={featuredPost}/>
    <SubFeaturedPost posts={subFeaturedPost}/>
    <Grid container spacing={5} className={useStyles().mainGrid}>
      <PostsView posts={posts} />
      <Sidebar topTrends={topTrends.edges}/>
    </Grid>

  </Layout>
)}

export default IndexPage
