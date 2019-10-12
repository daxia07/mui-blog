import React from "react"
import Layout from "./layout"
import SEO from "../components/seo"
import { Container, Divider, Typography } from "@material-ui/core"
import useStyles from "../styles/style"
import BlogBriefCard from "../components/BlogBriefCard"

const BlogListView = ({ posts, classPrefix, sub }) =>
  <Layout classPrefix={classPrefix}>
    <SEO title={`${sub.name}: 
      ${sub.title.toUpperCase()}`}/>
    <Container container spacing={5} className={useStyles().container}>
      <Typography variant="h6" gutterBottom>
        {posts.length} {`Articles found from
            ${sub.name}:
            ${sub.title.toUpperCase()}`}
      </Typography>
      {posts.map((post, index) => (
        <div>
          <BlogBriefCard post={post} key={index}/>
          {index !== (posts.length - 1) ? <Divider/> : null}
        </div>))}
    </Container>
  </Layout>

export default BlogListView
