import { graphql } from "gatsby"

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
                excerpt(format: PLAIN, pruneLength: 300, truncate: true)
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
        publishDate(fromNow: true)
        title
        tags
        category
        description {
            description
        }
        fields {
            slug
        }
    }
`

export const blogFeatureFragment = graphql`
    fragment BlogFeature on ContentfulBlogPost {
        author {
            name
        }
        description {
            description
        }
        heroImage {
            file {
                url
            }
        }
        title
        fields {
            slug
        }
    }
`


export const blogSubFeatureFragment = graphql`
    fragment BlogSubFeature on ContentfulBlogPost {
        author {
            name
        }
        description {
            description
        }
        heroImage {
            file {
                url
            }
        }
        title
        publishDate(formatString: "MMMM DD, YYYY")
        fields {
            slug
        }
    }
`
