import React from "react"
import Select from "react-select"
import { Field } from "./FormPrimitives"
import "react-select/dist/react-select.css"

const options = [
  { value: "development", label: "Development" },
  { value: "investment", label: "Investment" },
  { value: "cooking", label: "Cooking" },
  { value: "travel", label: "Travel" },
  { value: "others", label: "Others" },
]

class MySelect extends React.Component {
  handleChange = value => {
    // this is going to call setFieldValue and manually update values.colors
    const key = this.props.name || this.props.id
    this.props.onChange(key, value)
  }

  handleBlur = () => {
    const key = this.props.name || this.props.id
    this.props.onBlur(key, true)
  }

  render() {
    const { id, label, error, value, onChange, onBlur, ...props } = this.props
    return (
      <Field id={id} label={label} error={error}>
        <Select
          id={id}
          options={options}
          inputClassName={!!error ? "input" : "input error"}
          multi={true}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={value}
          {...props}
        />
      </Field>
    )
  }
}

export default MySelect
