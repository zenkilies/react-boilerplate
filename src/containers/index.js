import {Switch, Route} from "react-router-dom";

import React from "react";

import HomePage from "./HomePage/HomePage";

class App extends React.Component {

  render() {

    return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    );

  }

}

App.propTypes = {
  // children: PropTypes.object.isRequired
};

export default App;
