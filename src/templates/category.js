import React from "react"
import { graphql } from "gatsby"
import { extractOtherPosts } from "../utils/extractor"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { Container, Divider, Typography } from "@material-ui/core"
import useStyles from "../styles/style"
import BlogCard from "../components/BlogCard"

const CategoryPage = ({data}) => {
  const {categoryPosts} = data;
  const posts = extractOtherPosts(categoryPosts.edges);
  let url = window.location.pathname;
  if (url[url.length-1] === `/`) {
    url = url.slice(0, url.length-1);
  }
  const cat = url.substr(url.lastIndexOf('/') + 1);
  return (
    <Layout>
      <SEO title={`Category: ${cat.toUpperCase()}`}/>
      <Container container spacing={5} className={useStyles().container}>
          <Typography variant="h6" gutterBottom>
            {posts.length} Articles found in Category: {cat.toUpperCase()}
          </Typography>
          {posts.map((post,index) => (
            <div>
              <BlogCard post={post}  key={index}/>
              {index!==(posts.length-1) ? <Divider/> : null}
            </div>))}
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
    query CategoryPostQuery($category: String) {
        categoryPosts:allContentfulBlogPost(filter: {draft: {eq: false}, category: {eq: $category} } ) {
            edges {
                node {
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
        }
    }
`

export default CategoryPage
