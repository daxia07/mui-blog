import React from "react"
import { StylesProvider, createGenerateClassName } from '@material-ui/styles'

const ClassNameWrapper = ({ children, classPrefix }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: classPrefix
  });
  return (
    <StylesProvider generateClassName={generateClassName}>
      {children}
    </StylesProvider>
  );
}

export default ClassNameWrapper