import React from "react"
import useStyles from "../styles/style"
import { Typography, Card, CardActionArea, CardContent, Grid, Hidden, CardMedia } from "@material-ui/core"

const SubFeaturedPost = ({posts}) => {
  const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.cardGrid}>
      {posts.map(post => (
        <Grid item key={post.title} xs={12} md={6}>
          <CardActionArea component="a" href={`/${post.slug}`}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {post.date}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {post.description}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    continue reading...
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia
                  className={classes.cardMedia}
                  image={post.imgUrl}
                  title={post.imgTitle}/>
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  )
}

export default SubFeaturedPost