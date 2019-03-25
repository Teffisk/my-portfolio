import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <p className="brand-statement">
          My name is Brad McKnight and I am a full stack software engineer etc.
        </p>
        <Link to="/projects">See my projects</Link>
      </div>
    );
  }
}

export default Home;
