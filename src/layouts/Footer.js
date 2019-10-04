import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import useStyles from "../styles/style"
import Copyright from "./Copyright"


const Footer = () => (
    <footer className={useStyles().footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        </Typography>
        <Copyright />
      </Container>
    </footer>
  )

export default Footer