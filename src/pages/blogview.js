import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import BlogBriefCard from "../components/BlogBriefCard"
import { extractOtherPosts } from "../utils/extractor"


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
  console.log(data)
  const posts = extractOtherPosts(data.blogCard.edges)
  return (
    <Layout>
      <SEO title="Blog"/>
      <BlogBriefCard post={posts[0]}/>
    </Layout>
  )
}

export default BlogPage
