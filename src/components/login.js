import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";

const FormItem = Form.Item;
export default class Login extends Component {
  handleSubmit = e => {
      e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <Form onSubmit={e=>this.handleSubmit(e)} className="login-form">
          <FormItem label="Email Address">
            <Input placeholder="Enter email" />
          </FormItem>
          <FormItem label="Password">
            <Input type="password" placeholder="Password" />
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
            <a>
              <small>Register an Account</small>
            </a>
            <br />
            <a>
              <small>Forgot password?</small>
            </a>
          </div>
        </Form>
      </div>
    );
  }
}
