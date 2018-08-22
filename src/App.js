import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import theme from "./styles/theme";
import Hero from "./components/hero/hero";
import AboutMe from "./components/aboutMe/aboutMe";
import JobHistory from "./components/jobHistory/jobHistory";

import champions from "./champions.mp3";

require("./App.css");

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Hero />
          <audio controls loop autoPlay>
            <source src={champions} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <AboutMe />
          <JobHistory />
          {/* Job History hacker */}
          {/* 90s Gif style website, dancing baby */}
          {/* TV Aerobics for job history ? */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
