import React from "react"
import { Paper } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Link from "./Link"
import useStyles from "../styles/style"

const FeaturedPost = ({ post }) => {
  const { imgUrl, title, description, slug } = post
  const props = { featuredPostImg: `url(https://${imgUrl})` }
  const classes = useStyles(props)
  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(https://${imgUrl})` }}>
      <div className={classes.overlay}/>
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" gutterBottom style={{ color: "white" }}>
              {title}
            </Typography>
            <Typography variant="h5" paragraph style={{ color: "white" }}>
              {description}
            </Typography>
            <Link to={`blog/${slug}/`} className={classes.featureLink}>
              <Typography variant="subtitle1" paragraph className={classes.readMore} color="primary">
                Continue reading...
              </Typography>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default FeaturedPost