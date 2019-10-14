import React from "react"
import { StylesProvider } from "@material-ui/styles"
import { jssPreset } from "@material-ui/styles"
import { create } from "jss"
import { ThemeProvider } from "@material-ui/styles"
import siteTheme from "./src/assets/siteTheme"
import SessionCheck from "./src/utils/SessionCheck"


export const wrapRootElement = ({ element }) => {
  return (
    <StylesProvider jss={create({
      ...jssPreset(),
      insertionPoint: `mui-inject-first`,
    })}>
      <ThemeProvider theme={siteTheme}>
        <SessionCheck>
          {element}
        </SessionCheck>
      </ThemeProvider>
    </StylesProvider>
  )
}
