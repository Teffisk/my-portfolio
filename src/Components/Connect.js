import React, { Component } from "react";

class Connect extends Component {
  render() {
    return (
      <div>
        <p className="brand-statement">
          My name is Brad McKnight and I am a full stack software engineer with
          a professional background in merchandising. I am always looking to
          learn the next cool thing to take my developer skills to the next
          level. My merchandising background means I come with a customer-first
          perspective to any project.
        </p>
        <ul className="link-list">
          <li>
            <a href="github.com/teffisk">
              <i className="fab fa-github fa-xl" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/brad-mcknight/">
              <i className="fab fa-linkedin fa-lg" />
            </a>
          </li>
          <a href="brad.mcknight91@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true" />
          </a>
        </ul>
      </div>
    );
  }
}

export default Connect;
