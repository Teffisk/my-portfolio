import React, { Component } from "react";
import Indy from "../Images/Indy.jpg";

class Project extends Component {
  render() {
    return (
      <div className="project-container">
        <h1 className="project-title">{this.props.project.name}</h1>
        <div className="project-tech">{this.props.project.tech}</div>

        <div className="project-content">
          <p className="project-desc">{this.props.project.description}</p>
        </div>

        <div className="project-img-container">
          <img src={this.props.project.img} className="project-img" />
        </div>

        <div className="project-links">
          <button className="live-site-btn">Check out the site</button>
          <button className="github-btn">See the code on Github</button>
        </div>
      </div>
    );
  }
}

export default Project;
