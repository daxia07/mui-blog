import React from "react"
import { makeStyles } from "@material-ui/core"
import ReactMarkdown from 'markdown-to-jsx'
import {Link as GLink} from 'gatsby'
import BlogTags from "./BlogTags"


const BlogBody = ({post}) => {
  const {body, imgUrl, tags, category} = post;
  const classes = makeStyles(theme => ({
    featuredImage: {
      position: `relative`,
      display: `block`,
      margin: `0 auto`,
      marginBottom: `1.5rem`,
      width: `100%`,
      height: `auto`,
      // objectFit: `contain`,
      maxHeight: `350px`
    },
    articlePost: {
      fontFamily: `Merriweather`,
      fontSize: `1.125rem`,
      fontHeight: 1.8,
      color: `#222222`,
      '& img': {
        display: `block`,
        margin: `0 auto`,
        marginBottom: `1.5rem`,
        width: `100%`,
        height: `auto`,
        // objectFit: `contain`,
        maxHeight: `350px`
      }
    },
    postCategory: {
      position: `absolute`,
      top: -75,
      left: -10,
      background: `#e74c3c`,
      padding: `10px 15px`,
      fontSize: 14,
      fontWeight: 600,
      textTransform: `uppercase`
    }
  }))();

  return (
    <React.Fragment>
      <img src={imgUrl} className={classes.featuredImage} alt={"feature"}/>
      <div style={{position: `relative`}}>
        <div className={classes.postCategory}>
          <GLink to={`/category/${category}/`} style={{textDecoration: `none`, color: `#FFF`}}>{category}</GLink>
        </div>
      <article className={classes.articlePost}>
        <ReactMarkdown>
          {body}
        </ReactMarkdown>
      </article>
      <BlogTags tags={tags}/>
      </div>
    </React.Fragment>
  )
}

export default BlogBody
