import React, { Component } from "react"
import { Formik } from "formik"
import withStyles from "@material-ui/core/styles/withStyles"
import { Form } from "./ProfileForm"
import Paper from "@material-ui/core/Paper"
import * as Yup from "yup"
import { Typography, Snackbar } from "@material-ui/core"
import API from "../utils/api"
import MessageBar from "./message"
import { amber, green } from "@material-ui/core/colors"
import { getProfile } from "../utils/auth"


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
  userName: Yup.string("Enter a unique username")
    .trim("No whitespaces allowed")
    .required("username is required"),
  fullName: Yup.string("Enter your fullName")
    .required("Full Name is required"),
  shortBio: Yup.string("")
    .min(20, "Short bio must contain at least 20 characters")
    .required("Enter your short bio"),
  SocialLink: Yup.string("Enter your social link").url(),
})

class ProfileForm extends Component {
  constructor(props) {
    super(props)
    const user = getProfile()
    let { username: inputName } = user["https://www.prawn-dumpling.com"].app_metadata
    inputName = inputName === undefined ? "" : inputName

    this.state = {
      open: false,
      infoType: "info",
      msg: "",
      inputName,
    }
  }

  componentDidMount() {
    // get user info
    //TODO: fetch with GraphQL and fill in as placeholder
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
    if (this.state.inputName) {
      delete data.userName
    }
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
      if (data.userName) {
        localStorage.setItem("appMeta", JSON.stringify({
          "userName": data.userName,
        }))
      }
      this.setState({
          ...this.state,
          infoType: "success",
          msg: "Success!" + res.data.msg,
        },
      )
      //TODO: update user info
    } else if (res.data && res.data.status && res.data.status !== 200) {
      this.setState({
        ...this.state,
        infoType: "warning",
        msg: "Warning!" + res.data.msg,
      })
    } else {
      this.setState({
        ...this.state,
        infoType: "error",
        msg: "Error!" + res.data.msg && "Error, please try later",
      })
    }

    console.log(res.data)
  }

  render() {
    //TODO: fetch data via GraphQL client
    const classes = this.props
    const vertical = "top"
    const horizontal = "center"
    const values = { userName: this.state.inputName, fullName: "", shortBio: "", socialLink: "" }
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

export default withStyles(styles)(ProfileForm)
