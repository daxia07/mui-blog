import {graphql} from "gatsby"

export const blogBasicFragment = graphql`
    fragment BlogBasic on ContentfulBlogPost {
        author {
            name
            lastName
            firstName
            avatar {
                file {
                    url
                }
            }
        }
        body {
            body
            internal {
                content
            }
            childMarkdownRemark {
                excerpt(format: PLAIN, pruneLength: 100, truncate: true)
            }
        }
        createdAt(fromNow: true)
        description {
            description
        }
        heroImage {
            file {
                url
            }
        }
        slug
        publishDate(fromNow: true)
        title
        tags
        category
        description {
            description
        }
    }
`
