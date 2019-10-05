import React from "react"
import Markdown from "../utils/Markdown"
import useStyles from "../styles/style"

const PostView = ({ post }) => {
  const classes = useStyles();
  return (
  <Markdown className={classes.markdown} key={post.substring(0, 40)}>
    {post}
  </Markdown>
)}

export default PostView