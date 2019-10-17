import React from "react"
import { Router } from "@reach/router"
import { login, isAuthenticated, getProfile } from "../utils/auth"
import ProfileForm from "../components/ProfileStyled"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { accountNav } from "../assets/constants"
import { Container } from "@material-ui/core"
import useStyles from "../styles/style"
import UserArticles from "../views/userBlogView"
import navigate from "../utils/navigate"
import Comments from "../components/Comments"
import EditorView from "../views/EditorView"


//TODO: renew token if active

const Home = ({ user }) => {
  // return <p>Hi, {user.name ? user.name : "friend"}!</p>
  return <UserArticles/>
}

const Account = () => {
  const classes = useStyles()
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  const user = getProfile()
  const { app_metadata: appMetaData } = user[`https://www.prawn-dumpling.com`]
  if (!Object.keys(appMetaData).includes("username")) {
    //TODO: pull snackBar to the upper level as message container
    //create a ref for children to modify message
    //OR: use redux to convey messages
    console.log("navigating to update profile")
    navigate("/account/profile")
    //TODO: pop up message
  }
  console.log(user)
  return (
    <Layout classPrefix="acc" items={accountNav}>
      <SEO title={"Account"}/>
      <Container className={classes.container}>
        <Router>
          <Home path="/account" user={user}/>
          <UserArticles path="account/posts"/>
          <Comments path="account/comments"/>
          <ProfileForm path="/account/profile"/>
          <EditorView path="/account/editor"/>
        </Router>
      </Container>
    </Layout>
  )
}

export default Account
