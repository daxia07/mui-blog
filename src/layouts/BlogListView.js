import React from "react"
import Layout from "./layout"
import SEO from "../components/seo"
import { Container, Divider, Typography } from "@material-ui/core"
import useStyles from "../styles/style"
import BlogCard from "../components/BlogCard"

const BlogListView = ({posts}) => {
  let url = '';
  if (typeof window !== 'undefined') {
    url = window.location.pathname;
  }
  if (url[url.length-1] === `/`) {
    url = url.slice(0, url.length-1);
  }
  if (url[0] === `/`) {
    url = url.slice(1, url.length);
  }
  const subPath = url.split('/')[0];
  const endpoint = url.substr(url.lastIndexOf('/') + 1);
  return (
    <Layout>
      <SEO title={`${subPath.charAt(0).toUpperCase() + subPath.slice(1)}: 
      ${endpoint.toUpperCase()}`}/>
      <Container container spacing={5} className={useStyles().container}>
        <Typography variant="h6" gutterBottom>
          {posts.length} {`Articles found from
            ${subPath.charAt(0).toUpperCase() + subPath.slice(1)}:
            ${endpoint.toUpperCase()}`}
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

export default BlogListView
