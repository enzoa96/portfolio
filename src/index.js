import React from "react";
import ReactDOM from "react-dom";
import Desktop from "./desktop.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Desktop />
  </BrowserRouter>,
  document.getElementById("root")
);
