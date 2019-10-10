import PropTypes from "prop-types"
import React from "react"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import useStyles from "../styles/style"
import { Link } from "gatsby"
import { capitalize } from "../utils/stringUtils"


const Header = ({ siteTitle }) => {
  const classes = useStyles()
  const title = siteTitle.replace("-", " ")
  return (
    <Toolbar className={classes.toolbar}>
      <Button size="small">Subscribe</Button>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        className={classes.toolbarTitle}
      >
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>{capitalize(title)}</Link>
      </Typography>
      <IconButton>
        <SearchIcon/>
      </IconButton>
      <Button variant="outlined" size="small">
        Sign up
      </Button>
    </Toolbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
