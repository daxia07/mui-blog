import React, { useState, useEffect } from "react"
import { Toolbar, useTheme } from "@material-ui/core"
import useStyles from "../styles/style"
import useWindowDimensions from "../utils/windowDimensions"
import Header from "./Header"
import AppTopBar from "./AppTopBar"
import { isAuthenticated } from "../utils/auth"
import { ListRenderer, CAT_BTNS, PAGES_BTNS } from "../assets/constants"


function NavBar({ siteTitle, main, items }) {
  const navItems = items ? items : [CAT_BTNS, PAGES_BTNS]
  console.log(navItems)
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
            {navItems.map((ele, index) =>
              ListRenderer(ele, false),
            )}
          </Toolbar>
          <main>{main}</main>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <AppTopBar siteTitle={siteTitle} main={main} isAuth={isAuth}/>
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