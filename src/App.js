import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import theme from "./styles/theme";
import Hero from "./components/hero/hero";
import AboutMe from "./components/aboutMe/aboutMe";
import JobHistory from "./components/jobHistory/jobHistory";
import Music from "./components/music/music";

require("./App.css");

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Hero />
          <Music />
          {/* Move out into an Audio/Cassette component with aerobics graphic? */}

          <AboutMe />
          <JobHistory />
          {/* Job History hacker, Add more information */}
          {/* Skills section? Need an idea */}
          {/* 90s Gif style website, dancing baby  for contact me */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
