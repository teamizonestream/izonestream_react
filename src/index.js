import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import GlobalStyle from "./components/globalStyle";

const apolloClient = new ApolloClient({
  uri: "https://izone.kentastudio.com/graphql"
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("miyawaki_sakura")
);

serviceWorker.unregister();
