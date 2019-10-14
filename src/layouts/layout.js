import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Footer from "./Footer"
import { createGenerateClassName, CssBaseline } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import NavBar from "./NavBar"
import useStyles from "../styles/style"
import { JssProvider } from "react-jss"

const Layout = ({ children, classPrefix, items }) => {
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

  const classes = useStyles()
  return (
    <JssProvider generateClassName={generateClassName}>
      <React.Fragment>
        <CssBaseline/>
        <Container className={classes.container}>
          <NavBar siteTitle={data.site.siteMetadata.title} main={children} items={items}/>
        </Container>
        <Footer/>
      </React.Fragment>
    </JssProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
