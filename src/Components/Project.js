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
          <a className="live-site-btn" href={this.props.project.deployedLink}>
            <i class="fa fa-laptop fa-3" aria-hidden="true" />
          </a>

          <a className="github-btn" href={this.props.project.githubLink}>
            <i class="fab fa-github fa-lg" />
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
