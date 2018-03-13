import React from "react";
import {Link} from "react-router-dom";

class Header extends React.Component {

  render() {

    return (
      <div>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/about">About</Link> &nbsp;
        <Link to="/counter">Counter</Link> &nbsp;
      </div>
    );

  }

}

export default Header;
