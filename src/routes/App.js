import React, { Component } from "react";
import Dashboard from "../components/dashboard";
import InnerDashboard from "../components/innerDashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Dashboard>
          <Route path="/" component={InnerDashboard} />
        </Dashboard>
      </Router>
    );
  }
}

export default App;
