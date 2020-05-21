import React, { Component } from "react";
import { Form, Select, Button, Row, Col, Input, Table, Icon } from "antd";
import {
  addDriverOrAssistant,
  addDriverOrAssistantFormData,
  addDriverOrAssistantReset,
  addDriverOrAssistantRefresh,
  deleteDOA,
  deleteDOAInState
} from "../redux/actions";
import { connect } from "react-redux";
import constant from "../redux/constants";
import storageHelper from "../services/offlineService";

const Option = Select.Option;

class AddDriverOrAssistant extends Component {
  componentWillMount() {
    this.props.refresh();
  }
  idGenerator = () => {
    return Math.random()
      .toString(36)
      .substr(2, 12);
  };
  handleChange = e => {
    if (e === constant.DRIVER || e === constant.ASSISTANT) {
      this.props.addDriverOrAssistantFormData({ name: "role", value: e });
    } else {
      this.props.addDriverOrAssistantFormData({
        name: e.target.name,
        value: e.target.value
      });
    }
  };
  handleDelete = record => {
    this.props.deleteDOA(record.id);
    const data = this.props.data.filter(function(item) {
      return item.key != record.key;
    });
    this.props.deleteInState(data);
  };
  handleSubmit = e => {
    e.preventDefault();
    if (navigator.onLine) {
      this.props.addDriverOrAssistant({
        id: this.idGenerator(),
        data: this.props.formdata
      });
    } else {
      storageHelper("addDriverOrAssistant", {
        id: this.idGenerator(),
        data: this.props.formdata
      });
    }
    this.props.addDOAReset();
  };

  render() {
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role"
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
                  value={this.props.formdata.role}
                  required
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
  formdata: state.addDriverOrAssistant.formData,
  message: state.addDriverOrAssistant.message,
  data: state.addDriverOrAssistant.data,
  loggedin: state.login.isSuccess
});
const mapDispatchToProps = dispatch => ({
  addDriverOrAssistant: payload => dispatch(addDriverOrAssistant(payload)),
  addDriverOrAssistantFormData: data =>
    dispatch(addDriverOrAssistantFormData(data)),
  addDOAReset: () => dispatch(addDriverOrAssistantReset()),
  refresh: () => dispatch(addDriverOrAssistantRefresh()),
  deleteDOA: id => dispatch(deleteDOA(id)),
  deleteInState: data => dispatch(deleteDOAInState(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDriverOrAssistant);
