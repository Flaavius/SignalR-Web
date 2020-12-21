import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import AppRoute from "./routes";

import "./assets/css/main.css";

import theme from "./theme";

render(
  (<ThemeProvider theme={theme}>
    <AppRoute />
  </ThemeProvider>),
  document.getElementById("app"),
);
