import React from "react"
import {graphql} from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import FeaturedPost from "../components/FeaturedPost"
import SubFeaturedPost from "../components/SubFeaturedPost"
// import BlogCard from "../components/BlogCard"
import PostsView from "../components/PostsView"
import {extractFeaturedPost, extractSubFeaturedPost, extractOtherPosts} from "../utils/extractor"


export const query = graphql`
    query MyQuery {
        featured: allContentfulBlogPost(filter: {draft: {eq: false}, featured: {eq: true}}) {
            edges {
                node {
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
                    slug
                    title
                }
            }
        }
        subFeatured: allContentfulBlogPost(filter: {subFeature: {eq: true}, draft: {eq: false}}) {
            edges {
                node {
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
                    slug
                    title
                    publishDate(formatString: "MMMM DD, YYYY")
                }
            }
        }
        otherPosts: allContentfulBlogPost(filter: {subFeature: {eq: false}, featured: {eq: false}, draft: {eq: false}}) {
            edges {
                node {
                    author {
                        name
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
            }
        }
    }
`

const IndexPage = ({ data }) => {
  const {featured, otherPosts, subFeatured} = data;
  const featuredPost = extractFeaturedPost(featured.edges[0].node);
  const subFeaturedPost = extractSubFeaturedPost(subFeatured.edges);
  const posts = extractOtherPosts(otherPosts.edges);
  console.log(posts);
  console.log(otherPosts);
  return (
  <Layout>
    <SEO title="Home" />
    <FeaturedPost post={featuredPost}/>
    <SubFeaturedPost posts={subFeaturedPost}/>
    {/*<PostsView posts={posts} />*/}
    {/*<BlogCard/>*/}
  </Layout>
)}

export default IndexPage
