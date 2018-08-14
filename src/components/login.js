import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

const FormItem = Form.Item;
export default class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <Form onSubmit={e => this.handleSubmit(e)} className="login-form">
          <FormItem label="Email Address">
            <Input type="email" placeholder="Enter email" required />
          </FormItem>
          <FormItem label="Password">
            <Input type="password" placeholder="Password" required />
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
