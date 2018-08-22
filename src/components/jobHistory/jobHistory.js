import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Job from "./job/job";

import("./jobHistory.css");

class JobHistory extends Component {
  render() {
    return (
      <div className="jobHistory">
        <Grid container justify="center">
          <Grid item xs={12}>
            <h1 className="glitch" data-text="Jobs">
              Job
            </h1>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Job company="Telux" title="Front-End Developer" />
              </Grid>
              <Grid item>
                <Job company="LateRooms" title="Data Scientist" />
              </Grid>
              <Grid item>
                <Job company="LateRooms" title="Junior Front-End Developer" />
              </Grid>
              <Grid item>
                <Job company="Cantarus" title="Junior Front-End Developer" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default JobHistory;
