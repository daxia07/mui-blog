import React from "react"
import clsx from "clsx"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Collapse from "@material-ui/core/Collapse"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShareIcon from "@material-ui/icons/Share"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import Link from "./Link"
import ArticleTags from "./ArticleTags"
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded"
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  card: {
    // maxWidth: 345,
    width: `100%`,
    boxShadow: `none`,
    borderRadius: `5px 5px 0 0`,
    marginTop: 15,
  },
  bbMedia: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    // margin: "-70px auto 0",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    marginLeft: 20,
    width: 72,
    height: 72,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.light,
  },
  comments: {
    marginRight: `1rem`,
  },
  numero: {
    position: `relative`,
    top: `-0.5rem`,
    textDecoration: `none`,
  },
  blogFooter: {
    borderTop: `1px solid lighten(#333, 70%)`,
    margin: `0 auto`,
    paddingBottom: `.125rem`,
    width: `80%`,
    "& ul": {
      listStyle: `none`,
      display: `flex`,
      flex: `row wrap`,
      justifyContent: `flex-end`,
      paddingLeft: 0,
    },
    "& li:first-child": {
      marginRight: `auto`,
    },
    "& li + li": {
      marginLeft: `.5rem`,
    },
    "& li": {
      color: `#999999`,
      fontSize: `.75rem`,
      height: `1.5rem`,
      letterSpacing: `1px`,
      lineHeight: `1.5rem`,
      textAlign: `center`,
      textTransform: `uppercase`,
      position: `relative`,
      whiteSpace: `nowrap`,
      "& a": {
        color: `#999999`,
      },
    },
  },
  icons: {
    fill: `lighten(#333, 40%)`,
    height: `24px`,
    marginRight: `.5rem`,
    transition: `.25s ease`,
    width: `24px`,
    "&:hover": {
      fill: `#ff4d4d`,
    },
  },
}))

export default function BlogBriefCard({ post }) {
  const {
    imgUrl, avatar, name, firstName, lastName, title, slug, description,
    excerpt, tags, createdAt,
  } = post
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Link to={`/user/${name}/`}>
            <Avatar aria-label="author"
                    style={{
                      marginLeft: 20,
                      width: 72,
                      height: 72,
                    }} alt={name} src={avatar}/>
          </Link>
        }
        action={
          <IconButton aria-label="follow">
            <BookmarkBorderIcon/>
          </IconButton>
        }
        title={
          <Typography variant="h6" gutterBottom className={classes.blogAuthorName}>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </Typography>
        }
        subheader={`created by ${firstName} ${lastName} @ ${createdAt}`}
      />
      <CardMedia
        style={{ height: 0, paddingTop: "56.25%" }}
        image={imgUrl}
        title="hero image"
        // style={{ backgroundImage: imgUrl }}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon/>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {excerpt}
          </Typography>
          <Link to={`blog/${slug}/`} className={classes.link}>
            <Typography variant="subtitle1" paragraph className={classes.readMore} color="primary">
              Continue reading...
            </Typography>
          </Link>
          <ArticleTags tags={tags}/>
          <div className={classes.blogFooter}>
            <ul>
              <li className={classes.publishedDate} style={{ display: `none` }}>{createdAt}</li>
              <li className={classes.comments}><a href="#" style={{ textDecoration: `none` }}>
                <ChatBubbleOutlineRoundedIcon className={classes.icons}/>
                <span className={classes.numero}>4</span></a></li>
              <li className="shares"><a href="#" style={{ textDecoration: `none` }}>
                <StarBorderRoundedIcon className={classes.icons}/>
                <span className={classes.numero}>1</span></a></li>
            </ul>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  )
}
