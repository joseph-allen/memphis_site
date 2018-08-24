import React, { Component } from "react";
import PropTypes from "prop-types";

import("./job.css");

class Job extends Component {
  render() {
    return (
      // TODO: Increase SVG performance somehow
      <div className="job">
        <p>Location: {this.props.company}</p>
        <p>Title: {this.props.title}</p>
        <p>{this.props.children}</p>
        <p className="text">joe@website:~ Joe$</p>
      </div>
    );
  }
}

Job.propTypes = {
  company: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.func
};

export default Job;
