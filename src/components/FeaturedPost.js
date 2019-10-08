import React from "react"
import { makeStyles, Paper } from "@material-ui/core"
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import {Link as GLink}  from "gatsby"


const FeaturedPost = ({ post }) => {
  const {imgUrl, title, description, slug} = post;
  const useStyles = makeStyles(theme => ({
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: `url(https://${imgUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
    mainGrid: {
      marginTop: theme.spacing(3),
    },
    readMore: {
      textDecoration: 'none'
    }
  }));

  const classes = useStyles();

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