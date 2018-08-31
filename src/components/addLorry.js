import React, { Component } from "react";
import { Form, Button, Row, Col, Input } from "antd";
import { addLorry, addLorryFormData, addLorryReset } from "../redux/actions";
import { connect } from "react-redux";
import storageHelper from "../services/offlineService";

class AddLorry extends Component {
  handleSubmit = e => {
    e.preventDefault();
    if (navigator.onLine) {
      this.props.addLorrySubmit(this.props.formdata);
    } else {
      storageHelper("addLorry", this.props.formdata);
    }
    this.props.lorryDatareset();
  };

  handleChange = e => {
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
                  name="lorrynumber"
                  maxLength={8}
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
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Input
                  type="number"
                  name="wwload"
                  value={this.props.formdata.wwload}
                  onChange={this.handleChange}
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
                  maxLength={25}
                  value={this.props.formdata.drivername1}
                  onChange={this.handleChange}
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
                  maxLength={25}
                  value={this.props.formdata.drivername2}
                  onChange={this.handleChange}
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
                  maxLength={25}
                  value={this.props.formdata.codriver1}
                  onChange={this.handleChange}
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
                  maxLength={25}
                  value={this.props.formdata.codriver2}
                  onChange={this.handleChange}
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
  formdata: state.addlorry.formdata
});
const mapDispatchToProps = dispatch => ({
  formData: payload => dispatch(addLorryFormData(payload)),
  addLorrySubmit: data => dispatch(addLorry(data)),
  lorryDatareset: () => dispatch(addLorryReset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddLorry);
