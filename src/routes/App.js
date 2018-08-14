import React, { Component } from "react";
import Dashboard from "../components/dashboard";
import InnerDashboard from "../components/innerDashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/login";
import Signup from "../components/signup";
import ForgetPassword from "../components/forgetPassword";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/dashboard"
            render={() => (
              <Dashboard>
                <Route path="/dashboard/" component={InnerDashboard} />
              </Dashboard>
            )}
          />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
