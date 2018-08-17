import React from "react";
import { Form, Button, Input, DatePicker, Select, Row, Col } from "antd";

const Option = Select.Option;
const { TextArea } = Input;

class AddUser extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <div className="dashboard">Add User</div>
        <div className="content">
          <div className="input-entry-form">
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                  {" "}
                  <label className="label-text">User Type</label>
                </Col>
                <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                  {" "}
                  <Select placeholder="Select User">
                    <Option value="dataentry">Data Entry User</Option>
                    <Option value="payout">Payout User</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                  <label className="label-text">First Name</label>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                  <Input type="text" placeholder="First Name" required />
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                  <label className="label-text">Last Name</label>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                  <Input placeholder="Last Name" required />
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                  <label className="label-text">Address</label>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                  <TextArea placeholder="Address" required />
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                  <label className="label-text">DOB</label>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                  <DatePicker />
                </Col>
              </Row>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUser;
