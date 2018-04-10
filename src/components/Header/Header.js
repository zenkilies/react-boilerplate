import {Link} from "react-router-dom";

import React from "react";

class Header extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

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
