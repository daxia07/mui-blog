import React, { useState, useEffect } from "react"
import { Toolbar, useTheme } from "@material-ui/core"
import useStyles from "../styles/style"
import useWindowDimensions from "../utils/windowDimensions"
import Header from "./Header"
import AppTopBar from "./AppTopBar"
import { isAuthenticated } from "../utils/auth"
import { ListRenderer, defaultNavItems } from "../assets/constants"


const NavBar = ({ siteTitle, main, items }) => {
  const navItems = items ? items : defaultNavItems
  const classes = useStyles()
  const { width } = useWindowDimensions()
  const theme = useTheme()
  const [isAuth, setIsAuth] = useState(isAuthenticated())
  useEffect(() => {
    setIsAuth(isAuthenticated())
    return () => {
    }
  }, [])
  const renderHelper = (windowWidth) => {
    if (windowWidth > theme.breakpoints.values["md"]) {
      return (
        <React.Fragment>
          <Header siteTitle={siteTitle} isAuth={isAuth}/>
          <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            {ListRenderer(navItems, true)}
          </Toolbar>
          <main>{main}</main>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <AppTopBar siteTitle={siteTitle} main={main} isAuth={isAuth} items={items}/>
        </React.Fragment>
      )
    }
  }

  return (
    <React.Fragment>
      {renderHelper(width)}
    </React.Fragment>
  )
}

export default NavBar