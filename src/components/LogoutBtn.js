import React from "react"
import { logout } from "../utils/auth"
import ListItemText from "@material-ui/core/ListItemText"
import { Link } from "@material-ui/core"

const LogoutBtn = () => {
  return (
    <Link style={{ color: `black` }} onClick={e => {
      e.preventDefault()
      logout()
    }}>
      <ListItemText primary={"Logout"}/>
    </Link>
  )
}

export default LogoutBtn
