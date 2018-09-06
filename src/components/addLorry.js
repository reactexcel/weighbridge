import React, { Component } from "react";
import { Form, Button, Row, Col, Input, Table, Icon } from "antd";
import {
  addLorry,
  addLorryFormData,
  addLorryReset,
  deleteLorry,
  deleteLorryInState,
  addLorryRefresh
} from "../redux/actions";
import { connect } from "react-redux";
import storageHelper from "../services/offlineService";

class AddLorry extends Component {
  componentWillMount() {
    this.props.refresh();
  }
  handleSubmit = e => {
    e.preventDefault();
    if (navigator.onLine) {
      this.props.addLorrySubmit(this.props.formdata);
    } else {
      storageHelper("addLorry", this.props.formdata);
    }
    this.props.lorryDataReset();
  };
  handleDelete = record => {
    this.props.deleteLorry(record.lorrynumber);
    const data = this.props.data.filter(function(item) { 
      
      return(item.key != record.key)} );
    
    this.props.deleteInState(data);
  };
  handleChange = e => {
    this.props.formData({ name: e.target.name, value: e.target.value });
  };
  render() {
    const columns = [
      {
        title: "Lorry No.",
        dataIndex: "lorrynumber",
        key: "lorrynumber"
      },
      {
        title: "Weigh w/o load",
        dataIndex: "wwload",
        key: "wwload"
      },
      {
        title: "Driver Name 1",
        dataIndex: "drivername1",
        key: "drivername1"
      },
      {
        title: "Driver Name 2",
        dataIndex: "drivername2",
        key: "drivername2"
      },
      {
        title: "Co-Driver 1",
        dataIndex: "codriver1",
        key: "codriver1"
      },
      {
        title: "Co-Driver 2",
        dataIndex: "codriver2",
        key: "codriver2"
      },
      {
        title: "delete",
        key: "action",
        render: (text, record) => (
          <span>
            <Button onClick={() => this.handleDelete(record)}>
              <Icon type="delete" />
            </Button>
          </span>
        )
      }
    ];
    
    const dataSource = this.props.data;

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
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <label>{this.props.message}</label>
              </Col>
            </Row>
          </Form>
          {this.props.data.length !== 0 && (
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  formdata: state.addlorry.formdata,
  message: state.addlorry.message,
  data: state.addlorry.data
});
const mapDispatchToProps = dispatch => ({
  formData: payload => dispatch(addLorryFormData(payload)),
  addLorrySubmit: data => dispatch(addLorry(data)),
  lorryDataReset: () => dispatch(addLorryReset()),
  deleteLorry: data => dispatch(deleteLorry(data)),
  deleteInState: data =>dispatch(deleteLorryInState(data)),
  refresh: () => dispatch(addLorryRefresh())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddLorry);
