import React from "react"
import classnames from "classnames"

export const Field = ({ error, id, label, className, children }) => {
  const classes = classnames(
    "input-group",
    {
      error: !!error,
    },
    className,
  )
  return (
    <div className={classes}>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      {children}
      <InputFeedback error={error}/>
    </div>
  )
}

export const InputFeedback = ({ error }) =>
  error
    ? <div className="input-feedback">
      {error}
    </div>
    : null
