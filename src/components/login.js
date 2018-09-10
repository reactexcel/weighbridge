import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginFormData, login, loginRedirect } from "../redux/actions";

const FormItem = Form.Item;
class Login extends Component {
  componentWillUpdate(props){
    if (props.loginSuccess) {
      props.history.push("/dashboard");
    }
  }
  componentWillMount(){
    this.props.loginRedirect();
    if(this.props.loginSuccess) {
      this.props.history.push("/dashboard");
    }
  }
  handleChange = e => {
    this.props.formData({ name: e.target.name, value: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signupSubmit(this.props.formdata);
  };

  render() {
    return (
      <div className="container">
        <Form onSubmit={e => this.handleSubmit(e)} className="login-form">
        <label>{this.props.message}</label>
          <FormItem label="Email Address">
            <Input
              type="email"
              placeholder="Enter email"
              name="name"
              value={this.props.formdata.name}
              onChange={this.handleChange}
              required
            />
          </FormItem>
          <FormItem label="Password">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              minLength={6}
              value={this.props.formdata.password}
              onChange={this.handleChange}
              required
            />
          </FormItem>
          <FormItem className="links">
            <Checkbox>Remember Password</Checkbox>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
          </FormItem>
          <div className="form-footer">
            <Link to="/signup">
              <small>Register an Account</small>
            </Link>
            <br />
            <Link to="/forgetpassword">
              <small>Forgot password?</small>
            </Link>
          </div>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  formdata: state.login.formdata,
  loginSuccess: state.login.isSuccess,
  message: state.login.message
});
const mapDispatchToProps = dispatch => ({
  formData: payload => dispatch(loginFormData(payload)),
  signupSubmit: payload => dispatch(login(payload)),
  loginRedirect: () => dispatch(loginRedirect())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
