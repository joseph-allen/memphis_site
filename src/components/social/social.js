import React, { Component } from "react";

import("./social.css");

class AboutMe extends Component {
  render() {
    return (
      <div className="social">
        {/* https://codepen.io/lbebber Lucas Bebber*/}
        <link
          rel="stylesheet"
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        />
        <nav className="menu">
          <input
            type="checkbox"
            href="#"
            className="menu-open"
            name="menu-open"
            id="menu-open"
          />
          <label className="menu-open-button" htmlFor="menu-open">
            <span className="hamburger hamburger-1" />
            <span className="hamburger hamburger-2" />
            <span className="hamburger hamburger-3" />
          </label>

          <a href="#" className="menu-item">
            <i className="fa fa-bar-chart" />
          </a>
          <a href="#" className="menu-item">
            <i className="fa fa-plus" />
          </a>
          <a href="#" className="menu-item">
            <i className="fa fa-heart" />
          </a>
          <a href="#" className="menu-item">
            <i className="fa fa-envelope" />
          </a>
          <a href="#" className="menu-item">
            <i className="fa fa-cog" />
          </a>
        </nav>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="shadowed-goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="10"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
              <feColorMatrix
                in="shadow"
                mode="matrix"
                values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
                result="shadow"
              />
              <feOffset in="shadow" dx="1" dy="1" result="shadow" />
              <feBlend in2="shadow" in="goo" result="goo" />
              <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="10"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
        </svg>
      </div>
    );
  }
}

export default AboutMe;
