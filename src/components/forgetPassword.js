import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const FormItem = Form.Item;
export default class ForgetPassword extends Component {
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
          <FormItem className="links">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Retrieve Password
            </Button>
          </FormItem>
          <div className="form-footer">
            <Link to="/">
              <small>Remember your Password? Signin</small>
            </Link>
          </div>
        </Form>
      </div>
    );
  }
}
