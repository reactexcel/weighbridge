import React, { Component } from "react";
import { Form, Select, Button, Row, Col, Input } from "antd";
import {
  addDriverOrAssistant,
  addDriverOrAssistantFormData
} from "../redux/actions";
import { connect } from "react-redux";

const Option = Select.Option;

class AddDriverOrAssistant extends Component {
  idGenerator = () => {
    return Math.random()
      .toString(36)
      .substr(2, 12);
  };
  handleChange = e => {
    if (e === "driver" || e === "assistant") {
      this.props.addDriverOrAssistantFormData({ name: "role", value: e });
    } else {
      this.props.addDriverOrAssistantFormData({
        name: e.target.name,
        value: e.target.value
      });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addDriverOrAssistant({
      id: this.idGenerator(),
      role: this.props.formdata.role,
      name: this.props.formdata.name
    });
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
                <Select
                  name="role"
                  placeholder="Please select role"
                  onChange={this.handleChange}
                >
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
                  name="name"
                  type="text"
                  value={this.props.formdata.name}
                  placeholder="Please enter the name"
                  onChange={e => this.handleChange(e)}
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
const mapStateToProps = state => ({
  formdata: state.addDriverOrAssistant.formData
});
const mapDispatchToProps = dispatch => ({
  addDriverOrAssistant: payload => dispatch(addDriverOrAssistant(payload)),
  addDriverOrAssistantFormData: data =>
    dispatch(addDriverOrAssistantFormData(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDriverOrAssistant);
