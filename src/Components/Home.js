import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <p className="brand-statement">
          I am a full stack developer who loves simple solutions for complex
          problems that deliver real results to the customer.
        </p>
        <Link to="/projects" className="see-my-projects">
          See my projects
        </Link>
      </div>
    );
  }
}

export default Home;
