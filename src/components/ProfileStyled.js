import React, { Component } from "react"
import { Formik } from "formik"
import withStyles from "@material-ui/core/styles/withStyles"
import { Form } from "./profileForm"
import Paper from "@material-ui/core/Paper"
import * as Yup from "yup"
import { Typography, Snackbar } from "@material-ui/core"
import API from "../utils/api"
import MessageBar from "./message"
import { amber, green } from "@material-ui/core/colors"


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
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: "flex",
    alignItems: "center",
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
    this.state = {
      open: false,
      infoType: "info",
      msg: "",
    }
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      open: true,
    })
  }

  handleClose = () => {
    this.setState({ ...this.state, open: false })
  }

  submit = async (data) => {
    console.log("submit")
    console.log(data)
    this.handleClick()
    console.log(this.state)
    const res = await API({
      method: "post",
      url: "/user/",
      headers: {
        Authorization: `Bearer ${localStorage["accessToken"]}`,
      },
      data,
    })
    if (res.data && res.data.status && res.data.status === 200) {
      this.setState({
          ...this.state,
          infoType: "success",
          msg: res.data.msg,
        },
      )
    } else if (res.data && res.data.status && res.data.status !== 200) {
      this.setState({
        ...this.state,
        infoType: "warning",
        msg: res.data.msg,
      })
    } else {
      this.setState({
        ...this.state,
        infoType: "error",
        msg: res.data.msg && "Error, please try later",
      })
    }
    console.log(res.data)
  }

  render() {
    const classes = this.props
    const vertical = "top"
    const horizontal = "center"
    const values = { userName: "", fullName: "", shortBio: "", socialLink: "" }
    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              autoHideDuration={1500}
              key={`${vertical},${horizontal}`}
              open={this.state.open}
              onClose={this.handleClose}
              ContentProps={{
                "aria-describedby": "message-id",
              }}>
              {console.log(this.state)}
              <MessageBar variant={this.state.infoType} message={this.state.msg} onClose={this.handleClose}/>
            </Snackbar>
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
