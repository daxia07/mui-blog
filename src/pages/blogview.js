import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { extractOtherPosts } from "../utils/extractor"
import BlogBriefCard from "../components/BlogBriefCard"
import { graphql } from "gatsby"
import { Button } from "@material-ui/core"

export const query = graphql`
    query BlogQuery {
        blogCard: allContentfulBlogPost(filter: {subFeature: {eq: false}, featured: {eq: false}, draft: {eq: false}}) {
            edges {
                node {
                    ...BlogBasic
                }
            }
        }
    }
`

const BlogPage = ({ data }) => {
  const posts = extractOtherPosts(data.blogCard.edges)
  return (
    <Layout classPrefix='bgp'>
      <SEO title="Blog"/>
      <Button color="primary">
        Primary
      </Button>
      <Button color="secondary">
        Secondary
      </Button>
      <BlogBriefCard post={posts[0]}/>
    </Layout>
  )
}

export default BlogPage
