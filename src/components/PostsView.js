import React from "react"
import { Grid, Typography, Divider } from "@material-ui/core"
import useStyles from "../styles/style"
import BlogCard from "./BlogCard"


const PostsView = ({ posts }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        Latest Posts
      </Typography>
      <Divider/>
      {posts.map((post,index) => (
        <BlogCard post={post}  key={index}/>
      ))}
      {posts.title}
    </Grid>
  )
}

export default PostsView