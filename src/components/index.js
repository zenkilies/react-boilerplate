import React from "react";
import {Switch, Route} from "react-router-dom";

import AboutPage from "./About/AboutPage";
import HomePage from "./Home/HomePage";

class App extends React.Component {

  render() {

    return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
      </Switch>
    );

  }

}

// Validating
App.propTypes = {
  // children: PropTypes.object.isRequired
};

export default App;
