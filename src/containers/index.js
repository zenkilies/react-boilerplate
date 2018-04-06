import {Switch, Route} from "react-router-dom";

import React from "react";

import {Header} from "./../components";

import AboutPage from "./AboutPage/AboutPage";
import HomePage from "./HomePage/HomePage";

class App extends React.Component {

  render() {

    return (
      <div className="container mt-4">

        <Header/>

        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>

      </div>
    );

  }

}

App.propTypes = {
  // children: PropTypes.object.isRequired
};

export default App;
