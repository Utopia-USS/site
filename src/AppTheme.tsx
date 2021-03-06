import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";

export const appThemeInstance = createMuiTheme({
  palette: {
    primary: {
      // light: "#bebed5ff",
      // main: "#50507c",
      // dark: "#27273dff",
      light: "#74a7cdff",
      main: "#5367aaff",
      dark: "#15162cff",
    },
    secondary: {
      light: "#f0e9e0ff",
      main: "#dec9a8ff",
      dark: "#d1a866ff",
    },
    text: {
      //primary: "#27273dff",
    },
  },
  typography: {
    fontFamily: "myriadpro",
    fontSize: 16,
  }
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