import React from "react"
import { StylesProvider } from "@material-ui/styles"
import { jssPreset } from "@material-ui/styles"
import { create } from "jss"

export const wrapRootElement = ({ element }) => {
  return (
    <StylesProvider ss={create({
      ...jssPreset(),
      insertionPoint: `mui-inject-first`,
    })} injectFirst>
      {element}
    </StylesProvider>
  )
}
