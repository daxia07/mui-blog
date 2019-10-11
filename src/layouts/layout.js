import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import { createGenerateClassName, CssBaseline } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import NavBar from "./NavBar"
import useWindowDimensions from "../utils/windowDimensions"
import AppTopBar from "./AppTopBar"
import { SECTIONS as sections } from "../assets/constants"
import useStyles from "../styles/style"
import siteTheme from "../assets/siteTheme"
import { ThemeProvider } from "@material-ui/styles"
import { JssProvider } from "react-jss"
import { useTheme } from "@material-ui/core"

const Layout = ({ children, classPrefix }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: classPrefix,
  })
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)
  const { width } = useWindowDimensions()
  const classes = useStyles()
  const theme = useTheme()
  const renderHelper = (windowWidth) => {
    if (windowWidth > theme.breakpoints.values["md"]) {
      return (
        <React.Fragment>
          <Header siteTitle={data.site.siteMetadata.title}/>
          <NavBar sections={sections}/>
          <main>{children}</main>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <AppTopBar siteTitle={data.site.siteMetadata.title} main={children}/>
        </React.Fragment>
      )
    }
  }

  return (
    <JssProvider generateClassName={generateClassName}>
      <ThemeProvider theme={siteTheme}>
        <React.Fragment>
          <CssBaseline/>
          <Container className={classes.container}>
            {renderHelper(width)}
          </Container>
          <Footer/>
        </React.Fragment>
      </ThemeProvider>
    </JssProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
