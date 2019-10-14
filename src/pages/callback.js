import React from "react"
import { handleAuthentication } from "../utils/auth"
import navigate from "../utils/navigate"


const Callback = () => {
  handleAuthentication()
  navigate("/")
  return <p>Loading...</p>
}

export default Callback
