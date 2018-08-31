import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { signupFormData } from "../redux/actions";

const FormItem = Form.Item;
class Signup extends Component {
  handleChange = e => {
    this.props.formData({ name: e.target.name, value: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    //this.props.signup();
  };

  render() {
    return (
      <div className="container">
        <Form onSubmit={e => this.handleSubmit(e)} className="login-form">
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
          </FormItem>
          <FormItem className="links">
            <Checkbox>Accept terms and conditions</Checkbox>
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
  formdata: state.signup.formdata
});
const mapDispatchToProps = dispatch => ({
  formData: payload => dispatch(signupFormData(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
