import React from "react"
import DisplayFormikState from "../utils/formik-helper"
import { Formik } from "formik"
import Yup from "yup"

import { EditorState } from "draft-js"

import TextInput from "@material-ui/core/TextField"
import Select from "../components/Select"
import RichEditor from "../components/RichEditor"
import Slider from "../components/Slider"

const formikEnhancer = Formik({
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .min(5, "Too short!")
      .max(60, "Too long")
      .required("A title is required"),
    topics: Yup.array().min(3, "Pick at least 3 tags").of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
    ),
  }),
  mapPropsToValues: props => ({
    editor: new EditorState.createEmpty(),
    title: "",
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

    <RichEditor
      id="editor"
      editorState={values.editor}
      onChange={setFieldValue}
      onBlur={setFieldTouched}
    />

    <Select
      id="topics"
      label="Topics"
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
      Do you want to boost this post?
    </label>
    {values.boost &&
    <Slider
      min={0}
      max={10000}
      onChange={setFieldValue}
      onBlur={setFieldTouched}
      values={values.price}
      name="price"
    />}
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
  return (
    <div className="df-editor">
      <MyEnhancedForm user={{ email: "hello@g.com" }}/>
    </div>
  )
}

export default EditorView
