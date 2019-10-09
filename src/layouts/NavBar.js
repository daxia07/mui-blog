import React from "react"
import { Toolbar, Button} from "@material-ui/core"
import useStyles from "../styles/style"
import {Link as GLink}  from "gatsby"

const sections = [
  'Development',
  'Investment',
  'Data',
  'Cooking',
  'Business',
  'Travel',
  'Portfolio',
  'Playground',
  'About',
];

const toLink = ele => {
  if (ele in ['Playground', `Portfolio`, 'About']) {
    return ele.toLowerCase()
  } else {
    return `/category/${ele.toLowerCase()}/`
  }
}

function NavBar() {
  const classes = useStyles();
  return (
    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      {sections.map(section => (
        <GLink to={toLink(section)} key={section} className={classes.navBarLink} activeClassName={classes.navLinkActive}>
          <Button color="inherit" className={classes.toolbarLink}>
            {section}
          </Button>
        </GLink>
      ))}
    </Toolbar>
)}

export default NavBar