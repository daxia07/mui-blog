import React, { Component } from "react"
import { Formik } from "formik"
import withStyles from "@material-ui/core/styles/withStyles"
import { Form } from "./profileForm"
import Paper from "@material-ui/core/Paper"
import * as Yup from "yup"
import { Typography } from "@material-ui/core"

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme
      .spacing(5)}px`,
  },
  container: {
    maxWidth: "200px",
  },
})

const validationSchema = Yup.object({
  userName: Yup.string("Enter a unique username").required("username is required"),
  fullName: Yup.string("Enter your fullName")
    .required("Full Name is required"),
  shortBio: Yup.string("")
    .min(20, "Short bio must contain at least 20 characters")
    .required("Enter your short bio"),
  SocialLink: Yup.string("Enter your social link").url(),
})

class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  submit = data => {
    console.log("submit")
    console.log(data)
  }

  render() {
    const classes = this.props
    const values = { userName: "", fullName: "", shortBio: "", socialLink: "" }
    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <Typography variant={"h4"} align={"center"} gutterBottom={true}>
              Update Profile
            </Typography>
            <Formik
              render={props => <Form {...props} />}
              initialValues={values}
              validationSchema={validationSchema}
              onSubmit={this.submit}
            />
          </Paper>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(InputForm)
