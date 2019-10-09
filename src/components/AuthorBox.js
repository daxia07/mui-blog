import React from "react"
import { Avatar, Grid } from "@material-ui/core"
import { Link as GLink } from "gatsby"
import useStyles from "../styles/style"

const AuthorBox = ({ post }) => {
  const { avatar, bio, firstName, lastName, name } = post
  const classes = useStyles()
  return (
    <Grid container className={`${classes.postTopMeta}`}>
      <Grid item md={2} xs={12}>
        <GLink to={`/user/${name}/`}>
          <Avatar alt={`${firstName} ${lastName}`} src={avatar}
                  style={{
                    margin: 10,
                    width: 72,
                    height: 72,
                    verticalAlign: `middle`,
                  }}/>
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

  )
}

export default AuthorBox