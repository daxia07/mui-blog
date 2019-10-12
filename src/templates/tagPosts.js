import React from "react"
import { graphql } from "gatsby"
import { extractOtherPosts } from "../utils/extractor"
import BlogListView from "../layouts/BlogListView"


const tagPage = ({ data, pageContext: { tag } }) => {
  const { tagPosts } = data
  const posts = extractOtherPosts(tagPosts.edges)
  const sub = { name: `Tag`, title: tag }
  return (
    <BlogListView posts={posts} classPrefix="tagp" sub={sub}/>
  )
}

export const pageQuery = graphql`
    query TagPostQuery($tag: String) {
        tagPosts:allContentfulBlogPost(filter: {draft: {eq: false}, tags: {in: [$tag]} } ) {
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

export default tagPage
