import React from "react"
import { StylesProvider } from "@material-ui/styles"
import { jssPreset } from "@material-ui/styles"
import { create } from "jss"
import { ThemeProvider } from "@material-ui/styles"
import siteTheme from "./src/assets/siteTheme"


export const wrapRootElement = ({ element }) => {
  return (
    <StylesProvider jss={create({
      ...jssPreset(),
      insertionPoint: `mui-inject-first`,
    })} injectFirst>
      <ThemeProvider theme={siteTheme}>
        {element}
      </ThemeProvider>
    </StylesProvider>
  )
}
