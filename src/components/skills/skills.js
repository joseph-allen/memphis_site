import React, { Component } from "react";
import PropTypes from "prop-types";

import("./skills.css");

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h2>SKILLS</h2>
        <ul>
          <li>
            1. Front-end ............ 1200
            <p>HTML, CSS, SCSS</p>
            <p>Javascript, React</p>
            <br />
          </li>
          <li>
            2. Data Science .......... 900
            <p>Python, NumPy, Pandas</p>
            <p>R, SQL</p>
            <br />
          </li>

          <li>
            3. Project Management .... 400
            <p>Kanban, JIRA, Trello</p>
            <br />
          </li>
          <li>
            4. Tools ................. 300
            <p>Git, GitHub</p>
            <p>Netlify</p>
            <p>LaTeX</p>
            <br />
          </li>
        </ul>

        <div className="pacman">
          <div className="pacman-top" />
          <div className="pacman-bottom" />
          <div className="feed" />
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  company: PropTypes.string,
  title: PropTypes.string
};

export default Skills;
