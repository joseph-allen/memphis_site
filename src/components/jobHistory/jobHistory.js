import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import("./jobHistory.css");
// import("./assets/Joe.jpeg");

class JobHistory extends Component {
  render() {
    return (
      <div className="jobHistory">
        <Grid container justify="center">
          <Grid item>
            <h1 className="glitch" data-text="JobHistory">
              JobHistory
            </h1>
            <div className="card">
              <h3>Joe of all trades, master of some &trade;</h3>
              <ol>
                <li>I do website stuff</li>
                <li>I help machines learn</li>
                <li>I tweet pretty good</li>
                <li>I run and attend meetups</li>
                <li>I make digital art</li>
                <li>I sing, dance and play music</li>
              </ol>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default JobHistory;
