import React from "react"
import { Button, Toolbar } from "@material-ui/core"
import useStyles from "../styles/style"
import { Link as GLink } from "gatsby"
import { toLink } from "../utils/stringUtils"


function NavBar({ sections }) {
  const classes = useStyles()
  return (
    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      {sections.map(section => (
        <GLink to={toLink(section)} key={section} className={classes.navBarLink}
               activeClassName={classes.navLinkActive}>
          <Button color="inherit" className={classes.toolbarLink}>
            {section}
          </Button>
        </GLink>
      ))}
    </Toolbar>
  )
}

export default NavBar