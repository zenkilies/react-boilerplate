import React from "react";
import {Switch, Route} from "react-router-dom";

import {Header} from "./../components";

import AboutPage from "./AboutPage/AboutPage";
import CounterPage from "./CounterPage/CounterPage";
import HomePage from "./HomePage/HomePage";

class App extends React.Component {

  render() {

    return (
      <div className="container mt-5">

        <Header/>

        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/counter" component={CounterPage}/>
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
