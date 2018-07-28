import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import theme from "./styles/theme";
import Hero from "./components/hero/hero";
import AboutMe from "./components/aboutMe/aboutMe";

require("./App.css");

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Hero />
          <AboutMe />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
