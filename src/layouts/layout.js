import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import { CssBaseline } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import NavBar from "./NavBar"
import useWindowDimensions from "../utils/windowDimensions"
import AppTopBar from "./AppTopBar"
import { SECTIONS as sections } from "../assets/constants"
import useStyles from "../styles/style"


const Layout = ({ children }) => {
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
  const renderHelper = (windowWidth) => {
    if (windowWidth > 960) {
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
          <AppTopBar siteTitle={data.site.siteMetadata.title}
                     main={children}
          />
        </React.Fragment>
      )
    }
  }

  return (
    <React.Fragment>
      <CssBaseline/>
      <Container className={classes.container}>
        {renderHelper(width)}
      </Container>
      <Footer/>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
