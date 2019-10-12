import PropTypes from "prop-types"
import React from "react"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core"
import Link from "../components/Link"
import { capitalize } from "../utils/stringUtils"
import SearchBar from "../components/SearchBar"
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded"
import { isAuthenticated } from "../utils/auth"


const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingLeft: `24px`,
    paddingRight: `24px`,
    display: `flex`,
    position: `relative`,
    alignItems: `center`,
    minHeight: `64px`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}))


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
        <Link to={"/"} style={{ color: "black" }}>
          {capitalize(title)}</Link>
      </Typography>
      <IconButton>
        <SearchBar/>
      </IconButton>
      <Link to={"/account/"}>
        {isAuthenticated() ? <AccountCircleRoundedIcon/> :
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        }
      </Link>
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
