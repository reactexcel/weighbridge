import React, { Component } from "react";
import { Form, Button, Row, Col, Input } from "antd";

export default class Payment extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="dashboard">Payments</div>
        <div className="input-entry-form">
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Amount To Be Paid</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input type="text" placeholder="Enter the amount" required />
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
