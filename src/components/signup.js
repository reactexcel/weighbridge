import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

const FormItem = Form.Item;
export default class Signup extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <Form onSubmit={e => this.handleSubmit(e)} className="login-form">
          <FormItem label="Name">
            <Input type="text" placeholder="Enter your name" required />
          </FormItem>
          <FormItem label="Email Address">
            <Input type="email" placeholder="Enter email" required />
          </FormItem>
          <FormItem label="Password">
            <Input type="password" placeholder="Password" required />
          </FormItem>
          <FormItem label="Confirm Password">
            <Input type="password" placeholder="Confirm password" required />
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
