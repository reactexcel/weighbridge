import React, { Component } from "react";
import Dashboard from "../components/dashboard";
import InnerDashboard from "../components/innerDashboard";
import Searchnedit from "../components/searchnedit";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/login";
import Signup from "../components/signup";
import ForgetPassword from "../components/forgetPassword";
import WeightEntry from "../components/weightEntry";
import AddUser from "../components/adduser";
import ModifyUserInfo from "../components/modifyuserinfo";
import AddDriverOrAssistant from "../components/addDriverOrAssistant";
import AddLorry from "../components/addLorry";
import AddSupplier from "../components/addSupplier";
import Payment from "../components/payments";
import { connect } from "react-redux";

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
                {(this.props.type === "admin" ||
                  this.props.type === "dataentry") && (
                  <Route
                    exact
                    path="/dashboard/weightentry"
                    component={WeightEntry}
                  />
                )}
                {this.props.type === "admin" && (
                  <Route exact path="/dashboard/adduser" component={AddUser} />
                )}
                {this.props.type === "admin" && (
                  <Route
                    exact
                    path="/dashboard/modifyuserinfo"
                    component={ModifyUserInfo}
                  />
                )}
                {(this.props.type === "admin" ||
                  this.props.type === "dataentry") && (
                  <Switch>
                    <Route
                      exact
                      path="/dashboard/adddriverorassistant"
                      component={AddDriverOrAssistant}
                    />
                    <Route
                      exact
                      path="/dashboard/addlorry"
                      component={AddLorry}
                    />
                    <Route
                      exact
                      path="/dashboard/addsupplier"
                      component={AddSupplier}
                    />
                  </Switch>
                )}
                {(this.props.type === "admin" ||
                  this.props.type === "payout") && (
                  <Route exact path="/dashboard/payments" component={Payment} />
                )}
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

const mapStateToProps = state => ({
  type: state.login.data.type
});

export default connect(mapStateToProps)(App);
