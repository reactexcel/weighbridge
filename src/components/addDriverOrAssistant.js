import React, { Component } from "react";
import { Form, Select, Button, Row, Col, Input } from "antd";

const Option = Select.Option;

export default class AddDriverOrAssistant extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="dashboard">Add Driver Or Assistant</div>
        <div className="input-entry-form">
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Role</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Select placeholder="Please select role">
                  <Option value="driver">Driver</Option>
                  <Option value="assistant">Assistant</Option>
                </Select>
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Name</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <Input
                  type="text"
                  placeholder="Please enter the name"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}
