import { orange } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";

export const appThemeInstance = createMuiTheme({
  palette: {
    primary: {
      light: "rgba(d5f3ffff)",
      main: "rgba(6bd6ffff)",
      dark: "rgba(0fbdffff)"
    },
    secondary: {
      light: "rgba(f9f9f9ff)",
      main: "rgba(f2f2f2ff)",
      dark: "rgba(e6e6e6ff)",
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