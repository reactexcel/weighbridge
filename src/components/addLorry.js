import React, { Component } from "react";
import { Form, Button, Row, Col, Input } from "antd";
import { addLorry, addLorryFormData } from "../redux/actions";
import { connect } from "react-redux";

class AddLorry extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.addLorrySubmit(this.props.formdata);
  };

  handleChange = e => {
    console.log(e.target.value);
    this.props.formData({ name: e.target.name, value: e.target.value });
  };
  render() {
    return (
      <div>
        <div className="dashboard">Add Lorry</div>
        <div className="input-entry-form">
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Lorry No</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input
                  type="text"
                  placeholder="Please enter the lorry no"
                  name="lorrynumber"
                  value={this.props.formdata.lorrynumber}
                  onChange={this.handleChange}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">weight without load</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input
                  type="text"
                  name="wwload"
                  value={this.props.formdata.wwload}
                  onChange={this.handleChange}
                  placeholder="Please enter the weight w/o load"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text"> driver name1</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input
                  type="text"
                  name="drivername1"
                  value={this.props.formdata.drivername1}
                  onChange={this.handleChange}
                  placeholder="Please enter the driver name 1"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">driver name2</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input
                  type="text"
                  name="drivername2"
                  value={this.props.formdata.drivername2}
                  onChange={this.handleChange}
                  placeholder="Please enter the driver name 2"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">co-driver 1</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input
                  type="text"
                  name="codriver1"
                  value={this.props.formdata.codriver1}
                  onChange={this.handleChange}
                  placeholder="Please enter the co-driver1"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">co-driver 2</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input
                  type="text"
                  name="codriver2"
                  value={this.props.formdata.codriver2}
                  onChange={this.handleChange}
                  placeholder="Please enter the co-driver2"
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

const mapStateToProps = state => {
  console.log(state);

  return {
    formdata: state.addlorry.formdata
  };
};
const mapDispatchToProps = dispatch => ({
  formData: payload => dispatch(addLorryFormData(payload)),
  addLorrySubmit: data => dispatch(addLorry(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddLorry);
