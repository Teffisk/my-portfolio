import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    const links = (
      <span>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/connect">Connect</Link>
      </span>
    );
    return (
      <div className="anotherWholeGrid">
        <nav className="nav">{links}</nav>
      </div>
    );
  }
}

export default Header;
