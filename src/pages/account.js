import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import InputForm from "../components/profileEdit"
import Link from "../components/Link"
import Layout from "../layouts/layout"
import SEO from "../components/seo"

const Home = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const Profile = () => <InputForm/>
const Billing = () => <p>Billing</p>

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()
  console.log(user)

  return (
    <Layout classPrefix="acc">
      <SEO title={"Account"}>
        <nav>
          <Link to="/account">Home</Link>{" "}
          <Link to="/account/profile">Settings</Link>{" "}
          <Link to="/account/billing">Billing</Link>{" "}
          <a
            href="/"
            onClick={e => {
              e.preventDefault()
              logout()
            }}
          >
            Log Out
          </a>
        </nav>
        <Router>
          <Home path="/account" user={user}/>
          <Profile path="/account/settings"/>
          <Billing path="/account/billing"/>
        </Router>
      </SEO>
    </Layout>
  )
}

export default Account
