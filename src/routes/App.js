import React, { Component } from "react";
import Dashboard from "../components/dashboard";
import InnerDashboard from "../components/innerDashboard";
import Searchnedit from "../components/searchnedit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/login";
import Signup from "../components/signup";
import ForgetPassword from "../components/forgetPassword";
import WeightEntry from "../components/weightEntry";
import AddUser from "../components/adduser";
import DeleteUser from "../components/deleteuser";
import ModifyUserInfo from "../components/modifyuserinfo";
import AddDriverOrAssistant from "../components/addDriverOrAssistant";
import AddLorry from "../components/addLorry";
import AddSupplier from "../components/addSupplier";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/dashboard"
            render={() => (
              <Dashboard>
                <Route exact path="/dashboard" component={InnerDashboard} />
                <Route
                  exact
                  path="/dashboard/searchnedit"
                  component={Searchnedit}
                />
                <Route
                  exact
                  path="/dashboard/weightentry"
                  component={WeightEntry}
                />
                <Route exact path="/dashboard/adduser" component={AddUser} />
                <Route
                  exact
                  path="/dashboard/deleteuser"
                  component={DeleteUser}
                />
                <Route
                  exact
                  path="/dashboard/modifyuserinfo"
                  component={ModifyUserInfo}
                />
                <Route
                  exact
                  path="/dashboard/adddriverorassistant"
                  component={AddDriverOrAssistant}
                />
                <Route exact path="/dashboard/addlorry" component={AddLorry} />
                <Route
                  exact
                  path="/dashboard/addsupplier"
                  component={AddSupplier}
                />
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
