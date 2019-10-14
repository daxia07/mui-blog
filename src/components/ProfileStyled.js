import React, { Component } from "react"
import { Formik } from "formik"
import withStyles from "@material-ui/core/styles/withStyles"
import { Form } from "./profileForm"
import Paper from "@material-ui/core/Paper"
import * as Yup from "yup"

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
      .spacing.unit * 5}px`,
  },
  container: {
    maxWidth: "200px",
  },
})

const validationSchema = Yup.object({
  username: Yup.string("Enter a unique username").required("username is required"),
  fullName: Yup.string("Enter your fullName")
    .required("Full Name is required"),
  ShortBio: Yup.string("")
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
    console.log(data)
  }

  render() {
    const classes = this.props
    const values = { userName: "", fullName: "", shortBio: "", socialLink: "" }
    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <h1>Update Profile</h1>
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
