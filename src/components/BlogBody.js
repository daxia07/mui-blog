import React from "react"
import { makeStyles } from "@material-ui/core"
import ReactMarkdown from 'markdown-to-jsx';


const BlogBody = ({post}) => {
  const {body, imgUrl, tags, category} = post;
  const classes = makeStyles(theme => ({
    featuredImage: {
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
    }

  }))();

  return (
    <React.Fragment>
      <img src={imgUrl} className={classes.featuredImage}/>
      <article className={classes.articlePost}>
        <ReactMarkdown>
          {body}
        </ReactMarkdown>
      </article>
    </React.Fragment>
  )
}

export default BlogBody
