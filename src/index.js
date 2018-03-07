import "babel-polyfill";

import React from "react";
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import {render} from "react-dom";
import {Provider} from "react-redux";

import App from "./containers/index";

render(
  <Provider>
    <Router history={createBrowserHistory()}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("app")
);
