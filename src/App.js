import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import theme from "./styles/theme";
import Hero from "./components/hero/hero";
import AboutMe from "./components/aboutMe/aboutMe";
import JobHistory from "./components/jobHistory/jobHistory";
import Music from "./components/music/music";
import Skills from "./components/skills/skills";

require("./App.css");

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          ar
          {/* TODO: Add link to old website */}
          {/* TODO: Replace Rugrats image for mobile */}
          <Hero />
          <Music />
          <AboutMe />
          <JobHistory />
          <Skills />
          {/* TODO: Project section */}
          {/* TODO: 90s Gif style website, dancing baby  for contact me */}
          {/* TODO: Footer with social links */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
