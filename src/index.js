import "babel-polyfill";

import {createBrowserHistory} from "history";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import React from "react";

import "./index.scss";

import configureStore from "./store";

import App from "./containers";

export const store = configureStore();

render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("app")
);
