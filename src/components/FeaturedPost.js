import React from "react"
import { Paper } from "@material-ui/core"
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import {Link as GLink}  from "gatsby"
import useStyles from "../styles/style"


const FeaturedPost = ({ post }) => {
  const {imgUrl, title, description, slug} = post;
  const props = { featuredPostImg: `url(https://${imgUrl})`}
  const classes = useStyles(props);

  return (
    <Paper className={classes.mainFeaturedPost}>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {description}
            </Typography>
            <GLink to={`blog/${slug}/`} className={classes.featureLink} style={{textDecoration: 'none'}}>
              <Typography variant="subtitle1" paragraph className={classes.readMore} color="primary">
                Continue reading...
              </Typography>
            </GLink>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default FeaturedPost