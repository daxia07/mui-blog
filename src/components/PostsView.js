import React from "react"
import { Grid, Typography, Divider } from "@material-ui/core"
import useStyles from "../styles/style"
import PostView from "./PostView"


const PostsView = ({ posts }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={5} className={classes.mainGrid}>
      <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>
          Latest Posts
        </Typography>
        <Divider/>
        {posts.map(post => (
          <PostView post={post}  key={post.title}/>
        ))}
        {posts.title}
      </Grid>
    </Grid>
  )
}

export default PostsView