import React, { Component } from "react";
import { Form, Input, Button, Row, Col, Select, Modal } from "antd";
import { connect } from "react-redux";
import {
  weighEntryFormData,
  weighEntry,
  getLorry,
  getLocalLorry,
  setLorryInfo,
  weighEntryReset,
  addLorryResetSuccess,
  weighEntryRefresh,
  getSupplier,
  getLocalSupplier,
  setSupplierInfo,
  addSupplierResetSuccess,
  lorryModalOpen,
  lorryModalClose
} from "../redux/actions";
import storageHelper from "../services/offlineService";
import AddLorry from "./addLorry";

const Option = Select.Option;
class WeightEntry extends Component {
  constructor(props) {
    super(props);
  }
  showModal = () => {
    this.props.lorryModalOpen();
  };
  handleCancel = e => {
    this.props.lorryModalClose();
  };
  componentWillReceiveProps(nextprops){
    console.log(this.props);
    console.log(nextprops.addedLorry);
    if(nextprops.addedLorry){
      console.log("===============");
      this.props.getLorryData();
      this.props.addLorryResetSuccess();
    }
    
  }
  componentWillMount() {
    const lorryData = storageHelper("lorryData");
    const supplierData = storageHelper("supplierData");

    if (!lorryData || this.props.addedLorry) {
      this.props.getLorryData();
      this.props.addLorryResetSuccess();
    } else {
      this.props.getLocalLorryData(lorryData);
    }
    if (!supplierData || this.props.addedSupplier) {
      this.props.getSupplierData();
      this.props.addSupplierResetSuccess();
    } else {
      this.props.getLocalSupplierData(supplierData);
    }
    this.props.formData({
      name: "ticketnumber",
      value: Math.random()
        .toString(36)
        .substr(2, 8)
    });
    this.props.refresh();
  }
  handleWeighSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.onLine) {
      this.props.weighentrySubmit(this.props.formdata);
    } else {
      storageHelper("weighEntry", this.props.formdata);
    }
    this.props.weighDataReset({
      ticketnumber: Math.random()
        .toString(36)
        .substr(2, 8)
    });
  };
  handleSelectChange = e => {
    const lorryData = storageHelper("lorryData");
    this.props.setLorryData({ lorryData: lorryData, id: e });
  };
  handleSelectSupplierChange = e => {
    const supplierData = storageHelper("supplierData");
    this.props.s({ supplierData: supplierData, id: e });
  };
  handleChange = e => {
    this.props.formData({ name: e.target.name, value: e.target.value });
  };
  render() {
    let lorrylist;
    if (typeof this.props.lorrydata !== "string") {
      lorrylist = this.props.lorrydata.map((item, index) => {
        return (
          <Option key={index} value={index}>
            {item["Number Plate"].S}
          </Option>
        );
      });
    }
    let supplierlist;
    if (typeof this.props.supplierdata !== "string") {
      supplierlist = this.props.supplierdata.map((item, index) => {
        return (
          <Option key={index} value={index}>
            {item["Name"].S}
          </Option>
        );
      });
    }
    return (
      <div>
        <div className="dashboard">Weight Entry</div>
        <div className="input-entry-form">
          <Form onSubmit={this.handleWeighSubmit} layout="inline">
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Ticket No</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Input
                  type="text"
                  name="ticketnumber"
                  value={this.props.formdata.ticketnumber}
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Lori No</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                {this.props.lorrydata && (
                  <Select onChange={this.handleSelectChange}>
                    {lorrylist}
                  </Select>
                )}
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={{ span: 4, push: 1 }}
                xl={{ span: 4, push: 1 }}
              >
                <Button type="primary" onClick={this.showModal}>
                  Add Lorry
                </Button>
                <Modal
                  title="Add Lorry"
                  visible={this.props.lorryModal}
                  onCancel={this.handleCancel}
                  footer={null}
                >
                  <AddLorry flag={true}/>
                </Modal>
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <label className="label-text">Supplier Name</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                {this.props.supplierdata && (
                  <Select onChange={this.handleSelectSupplierChange}>
                    {supplierlist}
                  </Select>
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
                  maxLength={15}
                  value={this.props.formdata.supplierorigin}
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
                />
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
                <label> {this.props.message} </label>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    formdata: state.weighentry.formdata,
    lorrydata: state.weighentry.lorrydata,
    supplierdata: state.weighentry.supplierdata,
    message: state.weighentry.message,
    addedLorry: state.addlorry.isSuccess,
    addedSupplier: state.addSupplier.isSuccess,
    lorryModal: state.weighentry.lorryModal
  };
};
const mapDispatchToProps = dispatch => ({
  formData: payload => dispatch(weighEntryFormData(payload)),
  weighentrySubmit: data => dispatch(weighEntry(data)),
  getLorryData: () => dispatch(getLorry()),
  getLocalLorryData: data => dispatch(getLocalLorry(data)),
  setLorryData: payload => dispatch(setLorryInfo(payload)),
  weighDataReset: data => dispatch(weighEntryReset(data)),
  addLorryResetSuccess: data => dispatch(addLorryResetSuccess()),
  refresh: () => dispatch(weighEntryRefresh()),
  getSupplierData: () => dispatch(getSupplier()),
  getLocalSupplierData: data => dispatch(getLocalSupplier(data)),
  setSupplierData: data => dispatch(setSupplierInfo(data)),
  addSupplierResetSuccess: data => dispatch(addSupplierResetSuccess()),
  lorryModalOpen: () => dispatch(lorryModalOpen()),
  lorryModalClose: () => dispatch(lorryModalClose())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeightEntry);
