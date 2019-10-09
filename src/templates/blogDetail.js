import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"
import { extractOnePost } from "../utils/extractor"
import BlogHead from "../components/BlogHead"
import SEO from "../components/seo"
import { Container } from "@material-ui/core"
import useStyles from "../styles/style"
import BlogBody from "../components/BlogBody"
import AuthorCard from "../components/AuthorCard"
import useWindowDimensions from "../utils/windowDimensions"

const BlogDetail = ({ data }) => {
  const { width } = useWindowDimensions()
  const renderHelper = (windowWidth, post) => {
    if (windowWidth > 960) {
      return (
        <React.Fragment>
          <AuthorCard post={post}/>
          <BlogHead post={post}/>
          <BlogBody post={post}/>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <BlogHead post={post}/>
          <BlogBody post={post}/>
          <AuthorCard post={post}/>
        </React.Fragment>
      )
    }
  }
  const post = extractOnePost(data.contentfulBlogPost)
  const classes = useStyles()
  return (
    <Layout>
      <SEO title={"Blog"}/>
      <Container className={classes.container}>
        {renderHelper(width, post)}
      </Container>
    </Layout>
  )
}

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