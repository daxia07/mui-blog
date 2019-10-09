import React from "react"
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded"
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded"
import { Typography } from "@material-ui/core"
import { Link } from "gatsby"
import useStyles from "../styles/style"
import ArticleTags from "./ArticleTags"

const BlogCard = ({ post }) => {
  const {
    imgUrl, avatar, name, firstName, lastName, title, slug, description,
    body, excerpt, tags, createdAt,
  } = post
  const props = { imgUrl, avatar }
  const classes = useStyles(props)

  return (
    <div className={classes.blogContainer}>
      <div className="blog-header">
        <div className={classes.blogCover} style={{ backgroundImage: `url(https://${imgUrl})` }}>
          <div className={classes.blogAuthor}>
            <Typography variant="h6" gutterBottom className={classes.blogAuthorName}>
              <Link to={`/user/${name}`}>{`${firstName} ${lastName}`}</Link>
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.blogBody}>
        <Typography variant="h4" gutterBottom className={classes.blogTitle}>
          <Link to={`/blog/${slug}/`}>{`${title}`}</Link>
        </Typography>
        <div className={classes.blogSummary}>
          <p>{description}{excerpt}</p>
        </div>
        <ArticleTags tags={tags}/>
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
  )
}

export default BlogCard