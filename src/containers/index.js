import React from "react";
import {Switch, Route} from "react-router-dom";

import Header from "./../components/Header";

import AboutPage from "./AboutPage";
import HomePage from "./HomePage";

class App extends React.Component {

  render() {

    return (
      <div>

        <Header/>

        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>

      </div>
    );

  }

}

// Validating
App.propTypes = {
  // children: PropTypes.object.isRequired
};

export default App;
