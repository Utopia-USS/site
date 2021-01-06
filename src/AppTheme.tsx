import { orange } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";

export const appThemeInstance = createMuiTheme({
  palette: {
    primary: {
      light: "#bebed5ff",
      main: "#27273dff",
      dark: "#00000000"
    },
    secondary: {
      light: "#f0e9e0ff",
      main: "#dec9a8ff",
      dark: "#d1a866ff",
    }
  },
});

interface Props {
  children?: React.ReactElement;
}

export default function AppTheme(props: Props) {
  return (
    <ThemeProvider theme={appThemeInstance}>
      {props.children}
    </ThemeProvider>
  );
}