import React from "react"
import { makeStyles, Link, Grid, Avatar, Typography } from "@material-ui/core"
import {Link as GLink} from 'gatsby'

const BlogHead = ({post}) => {
  const {avatar, bio, firstName, lastName, title, createdAt, timeToRead, words, name} = post;
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
    hiddenMdDown: {
      [theme.breakpoints.down('md')]: {
        position: `absolute`,
        bottom: `4px`
      }
    },
    bigAvatar: {
      margin: 10,
      width: 72,
      height: 72,
      verticalAlign: `middle`
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
    authorDescription: {
      marginBottom: 5,
      marginTop: 5,
      fontSize: `0.95rem`,
      color: `rgba(0,0,0,.44)`,
      display: `block!important`
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
  console.log(classes);

  return (
    <div className={`${classes.mainHeading}`}>
      <Grid container className={`${classes.postTopMeta} ${classes.hiddenMdDown}`}>
        <Grid item md={2} xs={12}>
          <GLink to={`/user/${name}/`}>
            <Avatar alt={`${firstName} ${lastName}`} src={avatar} className={classes.bigAvatar}/>
          </GLink>
        </Grid>
        <Grid item md={10} xs={12}>
          <GLink className={`${classes.linkDark} ${classes.textCapitalize}`} to={`/user/${name}/`}>
            {firstName} {lastName} <span className={classes.btn}>Follow</span>
          </GLink>
          <span className={classes.authorDescription}>
            {bio}
          </span>
        </Grid>
      </Grid>
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