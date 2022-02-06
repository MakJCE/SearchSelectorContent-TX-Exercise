import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FD7014",
    },
    secondary: {
      main: "#393E46",
    },
    textPrimary: {
      main: "#FFFFFF",
    },
    textSecondary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: "Segoe UI",
    fontSize: 18,
    fontWeight: 'normal',
  },
});

theme.typography.h1 = {
  fontFamily: "Segoe UI",
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '28px',
  '@media (min-width:768px)': {
    fontFamily: "Segoe UI",
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '32px',
  },
}
theme.typography.h2 = {
  fontFamily: "Segoe UI",
  fontStyle: 'normal',
  fontSize: '24px',
  '@media (min-width:768px)': {
    fontFamily: "Segoe UI",
    fontStyle: 'normal',
    fontSize: '28px',
  },
}
theme.typography.h3 = {
  fontFamily: "Segoe UI",
  fontStyle: 'normal',
  fontSize: '16px',
  '@media (min-width:768px)': {
    fontFamily: "Segoe UI",
    fontStyle: 'normal',
    fontSize: '20px',
  },
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
