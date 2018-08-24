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
                <Job company="Telux" title="Front-End Developer">
                  <br />
                  Managed the development of a new React platform. Created the
                  project strutuce and ensured consistent linting and reusable
                  components. We utilised Material-UI and Netlify to rapidly
                  create and share our progress.<br /> <br /> Brought in a
                  reflective culture and a focus on mastery and innovation with
                  weekly talks and challenges.
                  <br />
                  <br />
                </Job>
              </Grid>
              <Grid item>
                <Job company="LateRooms" title="Data Scientist">
                  <br />
                  Working in Data Science at Laterooms has given me an
                  oppurtunity to apply my skills as a Software Engineer to a
                  more mathematical and academic field. In my time here I have
                  worked on the Hotel Ranking Algorithm, MLWords (automation of
                  AdWords Campaigns), and many smaller investigations and
                  models.
                  <br />
                  <br />
                </Job>
              </Grid>
              <Grid item>
                <Job company="LateRooms" title="Junior Front-End Developer">
                  <br />
                  Managed the creation of all new cobrands for the company as
                  well as the removal of redundant cobrands. We use Agile
                  methodologies to work in a large team without conflict in
                  HTML, SCSS and JS. Big believer in User Experience and have
                  given two brown bags "How to fake it til you make it: a case
                  study" and "CSS as a digital art form.
                  <br />
                  <br />
                </Job>
              </Grid>
              <Grid item>
                <Job company="Cantarus" title="Junior Front-End Developer">
                  <br />
                  Internship building websites for large clients such as XP
                  Power and Quantiq. Learnt to work in small teams and talk to
                  clients daily as well as strongly understanding the waterfall
                  methodology of software development.
                  <br />
                  <br />
                </Job>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default JobHistory;
