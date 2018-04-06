import "babel-polyfill";

import {createBrowserHistory} from "history";
import {render} from "react-dom";
import {Router} from "react-router-dom";

import React from "react";

import "./index.scss";

import App from "./containers";

render(
  <Router history={createBrowserHistory()}>
    <App/>
  </Router>,
  document.getElementById("app")
);
