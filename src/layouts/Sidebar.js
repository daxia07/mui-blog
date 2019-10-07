import React from "react"
import { Grid, Typography, Button, Container, GridList } from "@material-ui/core"
import useStyles from "../styles/style"
import {Link} from 'gatsby'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';


const Sidebar = ({topTrends}) => {
  const classes = useStyles();
  console.log(topTrends);
  return (
    <Grid item xs={12} md={4}>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Top Trends
      </Typography>
      <GridList component={'ul'} cols={1} spacing={2} cellHeight={'auto'}>
        {topTrends && topTrends.map((trend,index) => (
          <Button display="block" variant="body1" key={trend} style={{textAlign:'left'}}>
            <Link to={trend.node.slug} style={{textDecoration:'none', textAlign:'left', color: "#333", marginRight:`auto`}}>
              {`${index+1}. ${trend.node.title}`}
            </Link>
          </Button>
        ))}
      </GridList>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social Connection
      </Typography>

      <TwitterIcon className={classes.icons}/>
      <FacebookIcon className={classes.icons}/>
      <EmailIcon className={classes.icons}/>

      {/*{social && social.map(network => (*/}
      {/*  <Link display="block" variant="body1" href="#" key={network}>*/}
      {/*    {network}*/}
      {/*  </Link>*/}
      {/*))}*/}
    </Grid>
)}

export default Sidebar