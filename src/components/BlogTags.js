import React from "react"
import {Link as GLink} from 'gatsby'
import useStyles from "../styles/style"

const BlogTags = ({tags}) => {
  const classes = useStyles();
  return (
    <div>
      <ul className={classes.tags}>
        {tags.map(tag =>
          <li>
             <GLink to={`/tags/${tag}`} style={{textDecoration: `none`, color:'#FFF', background: `#8e855a`}}>
                {tag}
            </GLink>
          </li>)}
      </ul>
    </div>
  )
}

export default BlogTags
