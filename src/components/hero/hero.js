import React, { Component } from "react";

import("./hero.css");

class Hero extends Component {
  render() {
    return (
      // Code by Beatrize Agustin https://codepen.io/abeatrize/pen/yXzoMw
      <div className="hero">
        <div id="rugBackground" />
        <div id="rugMainBody">
          <div id="titleCard">
            <div className="jaggedShape1" />
            <div className="jaggedShape2" />
            <div className="jaggedShape3" />
            <div className="jaggedShape4" />
            <div className="jaggedShape5" />
          </div>
          <div id="titleCardblock">
            <div className="jaggedShape1B" />
            <div className="jaggedShape2B" />
            <div className="jaggedShape3B" />
            <div className="jaggedShape4B" />
            <div className="jaggedShape5B" />
          </div>

          <div className="mainBackground">
            <h1>Joseph Allen</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
