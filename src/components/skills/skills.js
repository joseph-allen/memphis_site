import React, { Component } from "react";
import PropTypes from "prop-types";

import("./skills.css");

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h2>SKILLS</h2>
      </div>
    );
  }
}

Skills.propTypes = {
  company: PropTypes.string,
  title: PropTypes.string
};

export default Skills;
