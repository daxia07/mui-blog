import React from "react"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import Link from "./Link"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  card: {
    // maxWidth: 345,
    width: `100%`,
    boxShadow: `none`,
    borderRadius: `5px 5px 0 0`,
    marginTop: 15,
    backgroundColor: `rgba(0, 0, 0, 0)`,
  },
  avatar: {
    marginLeft: 20,
    width: 72,
    height: 72,
    [theme.breakpoints.down("sm")]: {
      width: 50,
      height: 50,
    },
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.light,
  },
  btn: {
    borderColor: `#754abc`,
    color: `#754abc`,
    marginLeft: 12,
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
    border: `1px solid transparent`,
  },
}))

export default function AuthorCard({ post }) {
  const {
    avatar, bio, firstName, lastName, name,
  } = post
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Link to={`/user/${name}/`}>
            <Avatar aria-label="author" src={avatar}
                    className={classes.avatar}/>
          </Link>
        }
        title={
          <Typography variant="h6" gutterBottom className={classes.blogAuthorName}>
            <Link to={`/user/${name}/`}>
              {`${firstName} ${lastName}`} <span className={classes.btn}>Follow</span>
            </Link>
          </Typography>
        }
        subheader={bio}
      />
    </Card>
  )
}
