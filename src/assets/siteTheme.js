import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import { b } from "@material-ui/core/colors"

let siteTheme = createMuiTheme({
  palette: {
    secondary: {
      // light: "#0066ff",
      main: "#009688",
      // dark: will be calculated from palette.secondary.main,
      // contrastText: "#ffcc00",
    },
    text: {
      primary: "#000",
    },
    // error: will use the default color
  },
})

siteTheme = responsiveFontSizes(siteTheme)

export default siteTheme