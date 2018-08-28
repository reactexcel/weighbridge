import React, { Component } from "react";
import { Form, Input, InputNumber, Button, Row, Col, Select } from "antd";
import { connect } from "react-redux";
import {
  weighEntryFormData,
  weighEntry,
  getLorry,
  getLocalLorry,
  setLorryInfo
} from "../redux/actions";
import storageHelper from "../services/offlineService";
import { asyncRepeat } from "../services/checkConnection";

const Option = Select.Option;
class WeightEntry extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const lorryData = storageHelper("lorryData");
    if (!lorryData) {
      this.props.getLorryData();
    } else {
      this.props.getLocalLorryData(JSON.parse(lorryData));
    }
    this.ticketnumber = Math.random()
      .toString(36)
      .substr(2, 8);
    this.props.formData({ name: "ticketnumber", value: this.ticketnumber });
  }
  handleSubmit = e => {
    e.preventDefault();
    if (navigator.onLine) {
      this.props.weighentrySubmit(this.props.formdata);
    } else {
      asyncRepeat();
      storageHelper("weighEntry", JSON.stringify(this.props.formdata));
    }
  };
  handleSelectChange = e => {
    const lorryData = JSON.parse(storageHelper("lorryData"));
    this.props.setLorryData({ lorryData: lorryData, id: e });
  };
  handleChange = e => {
    this.props.formData({ name: e.target.name, value: e.target.value });
  };
  render() {
    let list;
    if (typeof this.props.data !== "string") {
      list = this.props.data.map((item, index) => {
        return (
          <Option key={index} value={index}>
            {item["Number Plate"].S}
          </Option>
        );
      });
    }
    return (
      <div>
        <div className="dashboard">Weight Entry</div>
        <div className="input-entry-form">
          <Form onSubmit={e => this.handleSubmit(e)} layout="inline">
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Ticket No</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Input
                  type="text"
                  name="ticketnumber"
                  value={this.ticketnumber}
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Lori No</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                {this.props.data && (
                  <Select onChange={this.handleSelectChange}>{list}</Select>
                )}
              </Col>
            </Row>
            <Row>
              <Col sxs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Supplier Origin</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Input
                  type="text"
                  name="supplierorigin"
                  value={this.props.formdata.supplierorigin}
                  onChange={this.handleChange}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Supplier Name</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input
                  type="text"
                  name="suppliername"
                  value={this.props.formdata.suppliername}
                  onChange={this.handleChange}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Driver Name 1</label>
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
                <Input
                  type="text"
                  name="assistantname1"
                  maxLength={25}
                  value={this.props.formdata.assistantname1}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Driver Name 2</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Input
                  type="text"
                  name="drivername2"
                  maxLength={25}
                  value={this.props.formdata.drivername2}
                  onChange={this.handleChange}
                />
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
                <Input
                  type="text"
                  name="assistantname2"
                  maxLength={25}
                  value={this.props.formdata.assistantname2}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">With Load</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4} className="load-input">
                <Input
                  type="number"
                  name="wload"
                  value={this.props.formdata.wload}
                  onChange={this.handleChange}
                  required
                />
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
                <Input
                  type="number"
                  name="woload"
                  value={this.props.formdata.woload}
                  onChange={this.handleChange}
                  required
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Input type="text" required />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Unripe</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Input
                  type="text"
                  name="unripe"
                  value={this.props.formdata.unripe}
                  onChange={this.handleChange}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Net Weight</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Input
                  type="number"
                  name="netweight"
                  value={this.props.formdata.netweight}
                  onChange={this.handleChange}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Deduct (in %)</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Input
                  type="number"
                  name="deduct"
                  step="5"
                  value={this.props.formdata.deduct}
                  onChange={this.handleChange}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Button htmlType="submit" type="primary">
                  Submit &amp; Print Slip
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
  formdata: state.weighentry.formdata,
  data: state.weighentry.data
});
const mapDispatchToProps = dispatch => ({
  formData: payload => dispatch(weighEntryFormData(payload)),
  weighentrySubmit: data => dispatch(weighEntry(data)),
  getLorryData: () => dispatch(getLorry()),
  getLocalLorryData: data => dispatch(getLocalLorry(data)),
  setLorryData: data => dispatch(setLorryInfo(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeightEntry);
