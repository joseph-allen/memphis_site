import React, { Component } from "react";
import PropTypes from "prop-types";

import("./skills.css");

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h2>SKILLS</h2>
        <ul>
          <li>1. Fr0nt-3nd ............ 1200</li>
          <li>2. Data Sc1ence .......... 900</li>
          <li>3. Pr0j3ct Management .... 400</li>
          <li>4. Developm3nt ........... 300</li>
        </ul>
      </div>
    );
  }
}

Skills.propTypes = {
  company: PropTypes.string,
  title: PropTypes.string
};

export default Skills;
