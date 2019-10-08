import React from "react"
import {graphql} from "gatsby"
import Layout from "../layouts/layout"
import BlogCard from "../components/BlogCard"
import {extractOnePost} from "../utils/extractor"
import BlogHead from "../components/BlogHead"
import SEO from "../components/seo"
import { Container } from "@material-ui/core"
import useStyles from "../styles/style"
import BlogBody from "../components/BlogBody"

const BlogDetail = ({data}) => {
  console.log(data);
  const post = extractOnePost(data.contentfulBlogPost);
  console.log(post);
  const classes = useStyles();
  return (
    <Layout>
      <SEO title={"Blog"}/>
      <Container className={classes.container} >
        <BlogHead post={post}/>
        <BlogBody post={post}/>
      </Container>
    </Layout>
)}

export const pageQuery = graphql`
    query BlogPostQuery($slug: String) {
        contentfulBlogPost(fields: {slug: {eq: $slug}}) {
            ...BlogBasic
            author {
                shortBio {
                    childMarkdownRemark {
                        excerpt(format: PLAIN, pruneLength: 140, truncate: true)
                    }
                }
            }
            body {
                childMarkdownRemark {
                    timeToRead
                    wordCount {
                        words
                    }
                }
            }
            textType
        }
    }  
`

export default BlogDetail