import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#00FFF5",
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
  fontSize: '30px',
  '@media (min-width:768px)': {
    fontFamily: "Segoe UI",
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '42px',
    lineHeight: '55px',
  },
}
theme.typography.h2 = {
  fontFamily: "Segoe UI",
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '26px',
  '@media (min-width:768px)': {
    fontFamily: "Segoe UI",
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeight: '55px',
  },
}
theme.typography.h3 = {
  fontFamily: "Segoe UI",
  fontStyle: 'normal',
  fontWeight: '400px',
  fontSize: '18px',
  '@media (min-width:768px)': {
    fontFamily: "Segoe UI",
    fontStyle: 'normal',
    fontWeight: '400px',
    fontSize: '27px',
    lineHeight: '55px',
  },
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
