import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import {
  signUpFormData,
  signUp,
  signupRedirect,
  passwordDontMatch,
  TandCCheck,
  signupChecked
} from "../redux/actions";
import { connect } from "react-redux";

const FormItem = Form.Item;
class Signup extends Component {
  componentWillUpdate(props) {
    if (props.signupSuccess) {
      props.history.push("/dashboard");
      props.signupRedirect();
    }
  }
  handleChange = e => {
    this.props.formData({ name: e.target.name, value: e.target.value });
  };
  handleCheckChange = e => {
    //this.props.formData({name: e.target.name, value: !e.target.value})
    this.props.Checked(!e.target.value);
  }
  handleSubmit = e => {
    console.log(this.props.formdata.checked);
    
    e.preventDefault();
    if (
      this.props.formdata.password === this.props.formdata.confirmpassword &&
      this.props.formdata.checked
    ) {
      this.props.signupSubmit(this.props.formdata);
    } else {
      if (!this.props.formdata.checked) {
        this.props.TandCCheck();
      } 
      if(this.props.formdata.password !== this.props.formdata.confirmpassword){
        this.props.passwordDontMatch();
      }
    }
  };
  render() {
    return (
      <div className="container">
        <Form onSubmit={e => this.handleSubmit(e)} className="login-form">
          <label>{this.props.message}</label>
          <FormItem label="Name">
            <Input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={this.props.formdata.name}
              onChange={this.handleChange}
              required
            />
          </FormItem>
          <FormItem label="Email Address">
            <Input
              type="email"
              placeholder="Enter email"
              name="email"
              value={this.props.formdata.email}
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
          <FormItem label="Confirm Password">
            <Input
              type="password"
              placeholder="Confirm password"
              name="confirmpassword"
              value={this.props.formdata.confirmpassword}
              onChange={this.handleChange}
              required
            />
            <label>{this.props.validateMessage}</label>
          </FormItem>
          <FormItem className="links">
            <label>{this.props.checkTC}</label>
            <Checkbox
              checked={this.props.formdata.checked}
              name="checked"
              onChange={this.handleCheckChange}
            >
              Accept terms and conditions
            </Checkbox>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Signup
            </Button>
          </FormItem>
          <div className="form-footer">
            <Link to="/">
              <small>Already Have An Account? Signin</small>
            </Link>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  formdata: state.signup.formdata,
  message: state.signup.message,
  signupSuccess: state.signup.isSuccess,
  validateMessage: state.signup.validateMessage,
  checkTC: state.signup.checkTC
});
const mapDispatchToProps = dispatch => ({
  formData: payload => dispatch(signUpFormData(payload)),
  signupSubmit: payload => dispatch(signUp(payload)),
  signupRedirect: () => dispatch(signupRedirect()),
  passwordDontMatch: () => dispatch(passwordDontMatch()),
  TandCCheck: () => dispatch(TandCCheck()),
  Checked: (data) => dispatch(signupChecked(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
