import React from "react"
import Typography from "@material-ui/core/Typography"
import Link from '@material-ui/core/Link'

function Copyright(props) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright ©'}
      <Link color="inherit" href="http://prawn-dumpling.com/">
        {' '}Prawn-Dumpling.com{' '}
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright