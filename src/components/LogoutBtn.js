import React from "react"
import { logout } from "../utils/auth"
import ListItemText from "@material-ui/core/ListItemText"
import { Button } from "@material-ui/core"

const LogoutBtn = () => {
  return (
    <Button style={{ color: `black` }} onClick={e => {
      e.preventDefault()
      logout()
    }}>
      <ListItemText primary={"Logout"}/>
    </Button>
  )
}

export default LogoutBtn
