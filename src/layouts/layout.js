import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import { CssBaseline } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import NavBar from "./NavBar"

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

  return (
    <React.Fragment>
      <CssBaseline/>
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
        <NavBar/>
        <main>{children}</main>
      </Container>
      <Footer/>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
