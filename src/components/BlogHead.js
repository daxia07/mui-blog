import React from "react"
import { Typography } from "@material-ui/core"
import useStyles from "../styles/style"

const BlogHead = ({post}) => {
  const {title, createdAt, timeToRead, words} = post;
  const classes = useStyles();

  return (
    <div className={`${classes.mainHeading}`}>
      <Typography variant={"h3"} className={classes.postTitle}>
        {title}
      </Typography>
      <p><span className={classes.postDate}><time className={classes.postDate}>{createdAt}</time></span>
        <span className={classes.dot}>&middot;</span>
        <span className={classes.postDate}>{timeToRead} min read</span>
        <span className={classes.dot}>&middot;</span>
        <span className={classes.postDate}>{` ${words} words`}</span>
      </p>
    </div>
)}

export default BlogHead