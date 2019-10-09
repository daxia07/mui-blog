import React from "react"
import { Divider, Grid, Typography } from "@material-ui/core"
import BlogBriefCard from "./BlogBriefCard"


const PostsView = ({ posts, title }) => {
  let rTitle = title
  if (!title) {
    rTitle = "Latest Posts"
  }
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {rTitle}
      </Typography>
      <Divider/>
      {posts.map((post, index) => (
        <BlogBriefCard post={post} key={index}/>
      ))}
      {posts.title}
    </Grid>
  )
}

export default PostsView