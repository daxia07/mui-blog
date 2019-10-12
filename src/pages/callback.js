import React from "react"
import { handleAuthentication } from "../utils/auth"
import { navigate } from "gatsby"


const Callback = (props) => {
  console.log(props)
  handleAuthentication()
  navigate("/")
  return <p>Loading...</p>
}

export default Callback
