import React from "react"
import Markdown from "../utils/Markdown"
import useStyles from "../styles/style"
import { Typography } from "@material-ui/core"

const PostView = ({ post }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.mainGrid}>
        {post.title}
      </Typography>
      <Markdown className={classes.markdown} key={post.body.substring(0, 40)}>
        {post.body}
      </Markdown>
  </React.Fragment>
)}

export default PostView