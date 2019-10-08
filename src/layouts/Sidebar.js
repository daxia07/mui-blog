import React from "react"
import { Grid, Typography, Button, GridList } from "@material-ui/core"
import useStyles from "../styles/style"
import {Link} from 'gatsby'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';


const Sidebar = ({topTrends}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={4}>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Top Trends
      </Typography>
      <GridList component={'ul'} cols={1} spacing={2} cellHeight={'auto'}>
        {topTrends && topTrends.map((trend,index) => (
          <Button display="block" variant="text" key={index} style={{textAlign:'left'}}>
            <Link to={trend.node.fields.slug} style={{textDecoration:'none', textAlign:'left', color: "#333", marginRight:`auto`}}>
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
    </Grid>
)}

export default Sidebar