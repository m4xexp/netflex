import React from "react";
import { render } from "react-dom";
import "./index.css";
import { GlobalStyles } from "./global-style";
import App from "./_app";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
