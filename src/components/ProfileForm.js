import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import NameIcon from "@material-ui/icons/SupervisorAccount"
import DescriptionIcon from "@material-ui/icons/Description"
import LinkIcon from "@material-ui/icons/Link"

export const Form = props => {
  const {
    values: { userName, fullName, shortBio, socialLink },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
  } = props
  console.table(props)

  const change = (name, e) => {
    e.persist()
    handleChange(e)
    setFieldTouched(name, true, false)
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="userName"
        helperText={touched.userName ? errors.userName : ""}
        error={Boolean(errors.userName)}
        label="UserName"
        value={userName}
        onChange={handleChange}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <NameIcon/>
            </InputAdornment>
          ),
        }}
      />
      <div>{Boolean(errors.userName) ? errors.userName : ""}</div>
      <TextField
        name="fullName"
        helperText={touched.fullName ? errors.fullName : ""}
        error={Boolean(errors.fullName)}
        label="FullName"
        fullWidth
        value={fullName}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <NameIcon/>
            </InputAdornment>
          ),
        }}
      />
      <div>{Boolean(errors.fullName) ? errors.fullName : ""}</div>
      <TextField
        name="shortBio"
        helperText={touched.shortBio ? errors.shortBio : ""}
        error={Boolean(errors.shortBio)}
        label="shortBio"
        fullWidth
        type="shortBio"
        value={shortBio}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DescriptionIcon/>
            </InputAdornment>
          ),
        }}
      />
      <div>{errors.shortBio}</div>
      <TextField
        name="socialLink"
        helperText={touched.socialLink ? errors.socialLink : ""}
        error={Boolean(errors.socialLink)}
        label="Social Link"
        fullWidth
        type="shortBio"
        value={socialLink}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LinkIcon/>
            </InputAdornment>
          ),
        }}
      />
      <div>{errors.socialLink}</div>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={!isValid}
      >
        Submit
      </Button>
    </form>
  )
}
