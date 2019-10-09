import React from "react"
import { graphql } from "gatsby"
import { extractOtherPosts } from "../utils/extractor"
import BlogListView from "../layouts/BlogListView"


const UserPostsPage = ({ data }) => {
  const { userPosts } = data
  const posts = extractOtherPosts(userPosts.edges)
  return (
    <BlogListView posts={posts}/>
  )
}

export const pageQuery = graphql`
    query UserPostQuery($name: String) {
        userPosts:allContentfulBlogPost(filter: {draft: {eq: false}, author: {name: {eq: $name}}} ) {
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

export default UserPostsPage
