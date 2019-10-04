import React from "react"
import { Toolbar } from "@material-ui/core"
import useStyles from "../styles/style"
import Link from "@material-ui/core/Link"
import {Link as GLink}  from "gatsby"

const sections = [
  'Development',
  'Investment',
  'Data',
  'Cooking',
  'Business',
  'Travel',
  'Opinion',
  'Playground',
  'About',
];

function NavBar() {
  const classes = useStyles();
  return (
    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      {sections.map(section => (
        <GLink to={"/" + section.toLowerCase()} className={classes.navBarLink} activeClassName={classes.navLinkActive}>
          <Link color="inherit" noWrap key={section} variant="body2" className={classes.toolbarLink}>
            {section}
          </Link>
        </GLink>
      ))}
    </Toolbar>

)
}

export default NavBar