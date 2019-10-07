import React from "react"
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded'
import { makeStyles, Typography } from "@material-ui/core"
import {Link} from 'gatsby'

const BlogCard = ({post}) => {
  const {imgUrl, avatar, name, firstName, lastName, title, slug, description,
    body, excerpt, tags, createdAt} = post;
  const classes = makeStyles(theme => ({
    blogContainer: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: `5px`,
      boxShadow: `hsla(0, 0, 0, .2) 0 4px 2px -2px`,
      fontWeight: 100,
      margin: `48px auto`,
      width: `100%`,
      // [theme.breakpoints.between('sm','md')]:{
      //   width: `28rem`
      // },
      // [theme.breakpoints.between('md','lg')]:{
      //   width: `40rem`
      // },
      // [theme.breakpoints.up('lg')]:{
      //   width: `50rem`
      // },
      '& a': {
        color: `#4d4dff`,
        textDecoration: `none`,
        transition: `.25s ease`,
        '&:hover': {
          borderColor: `#ff4d4d`,
          color: `#ff4d4d`
        }
      }
    },
    blogCover: {
      background: `url("https:${imgUrl}")`,
      backgroundSize: `cover`,
      borderRadius: `5px 5px 0 0`,
      height: `15rem`,
      boxShadow: `inset hsla(0, 0, 0, .2) 0 64px 64px 16px`
    },
    blogAuthor: {
      margin: `0 auto`,
      paddingTop: `.125rem`,
      width: `80%`,
    },
    blogAuthorName: {
      '& a': {
        color: `#fff`,
        fontWeight: 100,
      },
      '&::before': {
        background: `url("https:${avatar}")`,
        backgroundSize: `cover`,
        borderRadius: `50%`,
        content: '"  "',
        display: `inline-block`,
        height: `32px`,
        marginRight: `.5rem`,
        position: `relative`,
        top: `8px`,
        width: `32px`
      },
    },
    blogBody: {
      margin: `0 auto`,
      width: `80%`
    },
    blogTitle :{
      paddingTop: theme.spacing(2),
      '& a': {
        color: `#333`,
        fontWeight: 100
      }
    },
    blogSummary :{
      '& p': {
        color: `lighten(#333, 10%)`
      }
    },
    blogTags :{
      '& ul': {
        display: `flex`,
        flexDirection: `row`,
        flexWrap: `wrap`,
        listStyle: `none`,
        paddingLeft: 0
      },
      '& li + li': {
        marginLeft: `.5rem`
      },
      '& a': {
        border: `1px solid #999999`,
        borderRadius: `3px`,
        color: `#999999`,
        fontSize: `.75rem`,
        height: `1.5rem`,
        lineHeight: `1.5rem`,
        letterSpacing: `1px`,
        padding: `0 .5rem`,
        textAlign: `center`,
        textTransform: `uppercase`,
        whiteSpace: `nowrap`,
        width: `5rem`
      }
    },
    blogFooter: {
      borderTop: `1px solid lighten(#333, 70%)`,
      margin: `0 auto`,
      paddingBottom: `.125rem`,
      width: `80%`,
      '& ul': {
        listStyle: `none`,
        display: `flex`,
        flex: `row wrap`,
        justifyContent: `flex-end`,
        paddingLeft: 0
      },
      '& li:first-child': {
        marginRight: `auto`
      },
      '& li + li': {
        marginLeft: `.5rem`
      },
      '& li': {
        color: `#999999`,
        fontSize: `.75rem`,
        height: `1.5rem`,
        letterSpacing: `1px`,
        lineHeight: `1.5rem`,
        textAlign: `center`,
        textTransform: `uppercase`,
        position: `relative`,
        whiteSpace: `nowrap`,
        '& a': {
          color: `#999999`
        }
      }
    },
    publishedDate: {
      border: `1px solid #999999`,
      borderRadius: `3px`,
      padding: `0 .5rem`
    },
    comments: {
      marginRight: `1rem`
    },
    numero: {
      position: `relative`,
      top: `-0.5rem`
    },
    icons: {
      fill: `lighten(#333, 40%)`,
      height: `24px`,
      marginRight: `.5rem`,
      transition: `.25s ease`,
      width: `24px`,
      '&:hover': {
        fill: `#ff4d4d`
      },
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
    },
  }))();

  return (
  <div className={classes.blogContainer}>
    <div className="blog-header">
      <div className={classes.blogCover}>
        <div className={classes.blogAuthor}>
          <Typography variant="h6" gutterBottom className={classes.blogAuthorName}>
            <Link to={`/${name}`}>{`${firstName} ${lastName}`}</Link>
          </Typography>
        </div>
      </div>
    </div>
    <div className={classes.blogBody}>
      <Typography variant="h4" gutterBottom className={classes.blogTitle}>
        <Link to={`/${slug}`}>{`${title}`}</Link>
      </Typography>
      <div className={classes.blogSummary}>
        <p>{description}{excerpt}</p>
      </div>
      <div className={classes.blogTags}>
        <ul>
          {tags.map(ele => (
            <li key={ele}><Link to={`/tags/${ele}/`}>{ele}</Link></li>
          ))}
        </ul>
      </div>
    </div>

    <div className={classes.blogFooter}>
      <ul>
        <li className={classes.publishedDate}>{createdAt}</li>
        <li className={classes.comments}><a href="#">
          <ChatBubbleOutlineRoundedIcon className={classes.icons}/>
          <span className={classes.numero}>4</span></a></li>
        <li className="shares"><a href="#">
          <StarBorderRoundedIcon className={classes.icons}/>
          <span className={classes.numero}>1</span></a></li>
      </ul>
    </div>
  </div>
)}

export default BlogCard