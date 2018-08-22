import React, { Component } from "react";
import PropTypes from "prop-types";

import("./job.css");

class Job extends Component {
  render() {
    return (
      <div className="job">
        <p>Location: {this.props.company}</p>
        <p>Title: {this.props.title}</p>
        <p className="text">joe@website:~ Joe$</p>
      </div>
    );
  }
}

Job.propTypes = {
  company: PropTypes.string,
  title: PropTypes.string
};

export default Job;
