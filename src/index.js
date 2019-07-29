import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import GlobalStyle from "./components/globalStyle";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <GlobalStyle />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
