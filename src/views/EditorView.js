import React from "react"
import DisplayFormikState from "../utils/formik-helper"
import { withFormik } from "formik"
import Yup from "yup"
import "../styles/formik-demo.css"

import { EditorState } from "draft-js"

import TextInput from "@material-ui/core/TextField"
import Select from "../components/Select"
import RichEditor from "../components/RichEditor"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  dfEditor: {
    "& label": {
      position: `relative`,
    },
    "&>form>div": {
      width: `100%`,
    },
    "& input": {
      padding: `6px 0 12px`,
      border: `1px solid #ddd`,
    },
  },
}))

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .min(5, "Too short!")
      .max(60, "Too long")
      .required("A title is required"),
    heroImage: Yup.string().matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
      { excludeEmptyString: true })
      .required("A cover image is required"),
    description: Yup.string()
      .min(5, "Too short!")
      .max(300, "Too long")
      .required("A description is required"),
    topics: Yup.array().min(1, "Pick at least 1 category")
      .max(1, "Only one category allowed").of(
        Yup.object().shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
        }),
      ),
  }),
  mapPropsToValues: props => ({
    editor: new EditorState.createEmpty(),
    title: "",
    heroImage: "",
    description: "",
    topics: [],
    price: [0],
    boost: false,
  }),
  handleSubmit: (values, { setSubmitting }) => {
    const payload = { ...values, topics: values.topics.map(t => t.value) }
    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2))
      setSubmitting(false)
    }, 1000)
  },
  displayName: "MyForm",
})

const MyForm = ({
                  values,
                  touched,
                  dirty,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  handleReset,
                  setFieldValue,
                  setFieldTouched,
                  isSubmitting,
                }) =>
  <form onSubmit={handleSubmit}>
    <TextInput
      id="title"
      label="Title"
      placeholder="Something catchy..."
      type="text"
      error={touched.title && errors.title}
      value={values.title}
      onChange={handleChange}
      onBlur={handleBlur}
    />

    <TextInput
      id="description"
      label="Description"
      placeholder="Tell readers the gist..."
      type="text"
      error={touched.description && errors.description}
      value={values.description}
      onChange={handleChange}
      onBlur={handleBlur}
    />

    <TextInput
      id="heroImage"
      label="Theme Image"
      placeholder="Please input cover image url"
      type="text"
      error={touched.heroImage && errors.heroImage}
      value={values.heroImage}
      onChange={handleChange}
      onBlur={handleBlur}
    />

    <label style={{ marginTop: `20` }}>Body</label>

    <RichEditor
      id="editor"
      editorState={values.editor}
      onChange={setFieldValue}
      onBlur={setFieldTouched}
    />

    <Select
      id="topics"
      label="Category"
      value={values.topics}
      onChange={setFieldValue}
      onBlur={setFieldTouched}
      error={touched.topics && errors.topics}
    />
    <label style={{ display: "block", fontWeight: "bold" }}>
      <input
        type="checkbox"
        name="boost"
        checked={values.boost}
        onChange={handleChange}
      />
      Do you want to save as draft?
    </label>
    <button
      type="button"
      className="button outline"
      onClick={handleReset}
      disabled={!dirty || isSubmitting}
    >
      Reset
    </button>
    <button type="submit" className="button" disabled={isSubmitting}>
      Submit
    </button>
    <DisplayFormikState
      {...{
        values: { ...values, editor: "omitted for demo" },
        touched,
        dirty,
        errors,
      }}
    />
  </form>

const MyEnhancedForm = formikEnhancer(MyForm)


const EditorView = () => {
  const classes = useStyles()
  return (
    <div className={classes.dfEditor}>
      <MyEnhancedForm user={{ email: "hello@g.com" }}/>
    </div>
  )
}

export default EditorView
