import "babel-polyfill";

import {createBrowserHistory} from "history";
import {render} from "react-dom";

import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import React from "react";

import configureStore from "./store";
import App from "./containers";

import "./index.scss";

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("app")
);
