import React from "react"
import { makeStyles, Grid, Avatar } from "@material-ui/core"
import {Link as GLink} from 'gatsby'

const AuthorBox = ({post}) => {
  const {avatar, bio, firstName, lastName, name} = post;
  const classes = makeStyles(theme => ({
    postTopMeta: {
      marginBottom: `2rem`
    },
    hiddenMdDown: {
      [theme.breakpoints.down('md')]: {
        position: `absolute`,
        transform: `translateY(100%)`,
        bottom: `-140px`,
        marginTop: 20
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
  }))();

  return (
    <Grid container className={`${classes.postTopMeta}`}>
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

  )}

export default AuthorBox