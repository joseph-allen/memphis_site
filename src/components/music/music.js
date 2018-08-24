import React, { Component } from "react";
import PropTypes from "prop-types";

import champions from "../../champions.mp3";

import("./music.css");

class Music extends Component {
  render() {
    return (
      // Add palm trees
      <div className="music">
        <div className="mixtape">
          <div className="tag">
            <div className="title" />
            <div className="player">
              <div className="play">
                <div className="roll-1">
                  <div className="teeth" />
                </div>
                <div className="roll-2">
                  <div className="teeth" />
                </div>
              </div>
              <div className="b-txt">
                <div className="right-txt">
                  <h1>_____</h1>
                  <h2>Big Joey</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="bot-det" />
          <div className="screws">
            <div className="scr-1" />
            <div className="scr-2" />
            <div className="scr-3" />
            <div className="scr-4" />
          </div>
        </div>

        <audio className="music_player" controls loop autoPlay>
          <source src={champions} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

Music.propTypes = {
  company: PropTypes.string,
  title: PropTypes.string
};

export default Music;
