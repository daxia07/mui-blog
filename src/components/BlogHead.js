import React from "react"
import { makeStyles, Typography } from "@material-ui/core"

const BlogHead = ({post}) => {
  const {title, createdAt, timeToRead, words} = post;
  const classes = makeStyles(theme => ({
    container: {
      width: `70%`,
      maxWidth: `100%`,
      position: `relative`,
      marginLeft: `auto`,
      marginRight: `auto`,
      paddingRight: 15,
      paddingLeft: 15,
      marginTop: 30,
      [theme.breakpoints.down('md')]: {
        width: `90%`
      },
    },
    mainHeading: {
      padding: `1rem 0`
    },
    row: {
      marginRight: theme.spacing(-2),
      marginLeft: theme.spacing(-2),
      [theme.breakpoints.up('md')]: {
        display: `flex`,
        flexWrap: `wrap`
      }
    },
    postTopMeta: {
      marginBottom: `2rem`
    },
    linkDark: {
      color: `rgba(0,0,0,.8)`,
      textDecoration: `none`
    },
    textCapitalize: {
      textTransform: `capitalize!important`
    },
    btn: {
      borderColor: `#754abc`,
      color: `#754abc`,
      marginLeft: 5,
      marginTop: -4,
      padding: `3px 10px`,
      textAlign: `center`,
      borderRadius: `999em`,
      fontSize: `0.85rem`,
      display: `inline-block`,
      fontWeight: 400,
      lineHeight: 1.25,
      whiteSpace: `nowrap`,
      verticalAlign: `middle`,
      userSelect: `none`,
      border: `1px solid transparent`
    },
    postTitle: {
      fontWeight: 700,
      marginBottom: `1rem`,
      color: `#111111`,
      fontSize: `2.5rem`,
      lineHeight: 1.1
    },
    postDate: {
      color: `rgba(0,0,0,.54)`,
      display: `inline-block`,
      fontFamily: `PT Sans`,
      fontSize: 15,
      fontWeight: 400,
      lineHeight: 1.5
    },
    dot: {
      marginLeft: 3,
      marginRight: 3,
    }
  }))();

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