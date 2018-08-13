import React, { Component } from "react";
import Sidemenu from "../components/sidemenu";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Sidemenu>
          <Route path="/"/>
          </Sidemenu>
      </Router>
    );
  }
}

export default App;
