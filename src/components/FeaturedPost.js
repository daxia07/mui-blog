import React from "react"
import useStyles from "../styles/style"
import { Paper } from "@material-ui/core"
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import {Link as GLink}  from "gatsby"


const FeaturedPost = ({ post }) => {
  const classes = useStyles();
  const imgSrc = "https://source.unsplash.com/user/erondu";
  const title = "Featured Post";
  const content = "Multiple lines of text that form the lede, informing new readers quickly and\n" +
    "efficiently about what&apos;s most interesting in this post&apos;s contents.";
  const articleUrl = "/";
  return (
    <Paper className={classes.mainFeaturedPost}>
      {
        <img
          style={{ display: 'none' }}
          src= {imgSrc}
          alt="background"
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {content}
            </Typography>
            <GLink to={articleUrl} className={classes.featureLink}>
              <Typography variant="subtitle1" paragraph>
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