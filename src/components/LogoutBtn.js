import React from "react"
import { logout } from "../utils/auth"
import Link from "./Link"

const LogoutBtn = () => {
  return (
    <Link
      href="/"
      onClick={e => {
        e.preventDefault()
        logout()
      }}
    >
      Log Out
    </Link>
  )
}

export default LogoutBtn
