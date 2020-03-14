import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./context";
import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  rootElement
);
