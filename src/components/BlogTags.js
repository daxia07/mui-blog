import React from "react"
import {Link as GLink} from 'gatsby'
import {makeStyles} from "@material-ui/core"

const BlogTags = ({tags}) => {
  const classes = makeStyles(theme => ({
    tags: {
      overflow: `hidden`,
      listStyle: 'none',
      padding: 0,
      margin: `0 0 20px`,
      '& a:before': {
        content: '""',
        position: `absolute`,
        left: -10,
        borderWidth: `10px 10px 10px 0`,
        borderStyle: `solid`,
        borderColor: `transparent #8e855a`
      },
      '& a:after': {
        content: '""',
        position: `absolute`,
        left: -2,
        top: 8,
        width: 3,
        height: 3,
        background: `#fff`,
        borderRadius: 5
      },
      '& li': {
        float: `left`,
        padding: 0,
        margin: `0 0 5px 20px`, /* make some space for the triangle */
        font: `12px/20px Arial, sans-serif`
      },
      "& a": {
        position:"relative",
        display:"block",
        padding:"0 8px",
        textDecoration:"none",
        color:"#fff",
        background:"#8e855a"
      },
    }
  }))();
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
