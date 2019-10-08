import React from "react"
import {graphql} from "gatsby"
import Layout from "../layouts/layout"
import BlogCard from "../components/BlogCard"
import {extractOnePost} from "../utils/extractor"

const BlogDetail = ({data}) => {
  const post = extractOnePost(data.contentfulBlogPost);
  return (
    <Layout>
      <BlogCard post={post}/>
    </Layout>
)}

export const pageQuery = graphql`
    query BlogPostQuery($slug: String) {
        contentfulBlogPost(fields: {slug: {eq: $slug}}) {
            ...BlogBasic
        }
    }  
`

export default BlogDetail