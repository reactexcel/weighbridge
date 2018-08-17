import React, { Component } from "react";
import { Form, Input, Button, Row, Col } from "antd";

export default class WeightEntry extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="weight-entry">
        <div className="dashboard">Weight Entry</div>
        <div className="input-entry-form">
          <Form onSubmit={e => this.handleSubmit(e)} layout="inline">
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Ticket No</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Input type="text" required />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Lori No</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Input type="text" required />
              </Col>
            </Row>
            <Row>
              <Col sxs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Supplier Origin</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Input type="text" required />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Supplier Name</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input type="text" required />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Driver Name 1</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input type="text" required />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={{ span: 4, push: 1 }}
                xl={{ span: 4, push: 1 }}
              >
                <label className="label-text">AssistantName1</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input type="text" required />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Driver Name 2</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input type="text" required />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={{ span: 4, push: 1 }}
                xl={{ span: 4, push: 1 }}
              >
                <label className="label-text">AssistantName2</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input type="text" required />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Manual Entry</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={1} xl={1}>
                <Input type="text" required />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">With Load</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4} className="load-input">
                <Input type="text" required />
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Input type="text" required />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">W/O Load</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4} className="load-input">
                <Input type="text" required />
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Input type="text" required />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Damaged</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Input type="text" required />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Net</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Input type="text" required />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Button htmlType="submit" type="primary">
                  Submit & Print Slip
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}
