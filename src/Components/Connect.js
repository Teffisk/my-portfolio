import React, { Component } from "react";

class Connect extends Component {
  render() {
    return (
      <div>
        <div className="brand-statement">
          <p>
            My name is Brad McKnight and I am a full stack software engineer. I
            am always looking to learn the next cool thing to take my developer
            skills to the next level. My merchandising background means I come
            with a customer-first perspective to any project.
          </p>
          <p>
            At the University of Tennessee, I majored in Geography because it
            gave me a broad perspective on the world. It is an interesting field
            of study because it looks at all the different forces that shape our
            world. It is the study of how tectonic plates create mountains, but
            also how climates affect culture, and how culture forms economic
            systems. It's a complicated world out there and there is so much to
            learn
          </p>
          <p>
            I've always loved exploring complicated subjects. That is what
            brought me to programming. It is such a deep subject, with so much
            to learn, but it is also so rewarding to built something beautiful
            and robust from the ground up. Through my previous work as a retail
            buyer, I learn so much about working for the customer. It is a job
            all about overcoming challenges in business that eventually meet the
            needs of the end user.
          </p>
        </div>
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
          <a href="mailto:brad.mcknight91@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true" />
          </a>
        </ul>
      </div>
    );
  }
}

export default Connect;
