import React from "react"
import { graphql } from "gatsby"
import { extractOtherPosts } from "../utils/extractor"
import BlogListView from "../layouts/BlogListView"

const CategoryPage = ({data}) => {
  const {categoryPosts} = data;
  const posts = extractOtherPosts(categoryPosts.edges);
  return (
    <BlogListView posts={posts}/>
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
