import React from "react"
import ReactMarkdown from "markdown-to-jsx"
import { Link as GLink } from "gatsby"
import useStyles from "../styles/style"
import ArticleTags from "./ArticleTags"


const BlogBody = ({ post }) => {
  const { body, imgUrl, tags, category } = post
  const classes = useStyles()

  return (
    <React.Fragment>
      <img src={imgUrl} className={classes.featuredImage} alt={"feature"}/>
      <div style={{ position: `relative` }}>
        <div className={classes.postCategory}>
          <GLink to={`/${category}/`} style={{ textDecoration: `none`, color: `#FFF` }}>{category}</GLink>
        </div>
        <article className={classes.articlePost}>
          <ReactMarkdown>
            {body}
          </ReactMarkdown>
        </article>
        <ArticleTags tags={tags}/>
      </div>
    </React.Fragment>
  )
}

export default BlogBody
