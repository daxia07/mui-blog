import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import InputForm from "../components/ProfileStyled"
import Link from "../components/Link"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import LogoutBtn from "../components/LogoutBtn"

import { accountNav } from "../assets/constants"

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
    <Layout classPrefix="acc" items={accountNav}>
      <SEO title={"Account"}/>
      <LogoutBtn/>
      <nav>
        <Link to="/account">Home</Link>{" "}
        <Link to="/account/profile">Profile</Link>{" "}
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
        <Profile path="/account/profile"/>
        <Billing path="/account/billing"/>
      </Router>
    </Layout>
  )
}

export default Account
