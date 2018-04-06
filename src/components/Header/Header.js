import {Link} from "react-router-dom";

import React from "react";

class Header extends React.Component {

  render() {

    return (
      <div>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/about">About</Link> &nbsp;
      </div>
    );

  }

}

export default Header;
