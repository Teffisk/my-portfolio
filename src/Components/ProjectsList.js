import React, { Component } from "react";
import Project from "./Project";
import PROJECTS from "../Static/Projects";

class ProjectsList extends Component {
  render() {
    const Projects = PROJECTS.map(p => {
      return <Project project={p} className="project-list" />;
    });
    return <div>{Projects}</div>;
  }
}

export default ProjectsList;
