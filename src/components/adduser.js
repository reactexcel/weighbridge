import React from "react";
import { Form, Button, Input, DatePicker, Select, Row, Col } from "antd";
import { addUserFormData, addUser } from "../redux/actions";
import { connect } from "react-redux";

const Option = Select.Option;
const { TextArea } = Input;
const dateFormat = "DD/MM/YYYY";

class AddUser extends React.Component {
  handleChange = e => {
    this.props.formData({ name: e.target.name, value: e.target.value });
  };
  handleDobDateChange = (date, dateString) => {
    this.props.formData({
      name: "dob",
      value: dateString
    });
  };
  handleSelectChange = e => {
    this.props.formData({
      name: "usertype",
      value: e
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addUser(this.props.formdata);
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
                  <Select
                    placeholder="Select User"
                    value={this.props.formdata.usertype}
                    onChange={this.handleSelectChange}
                  >
                    <Option value="dataentry">Data Entry User</Option>
                    <Option value="payout">Payout User</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                  <label className="label-text">User Name</label>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                  <Input
                    type="text"
                    placeholder="First Name"
                    name="username"
                    value={this.props.formdata.username}
                    onChange={this.handleChange}
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                    <label className="label-text">Email</label>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <Input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={this.props.formdata.email}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                    <label className="label-text">Password</label>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <Input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={this.props.formdata.password}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                </Row>
                <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                  <label className="label-text">Address</label>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                  <TextArea
                    placeholder="Address"
                    name="address"
                    onChange={this.handleChange}
                    value={this.props.formdata.address}
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                  <label className="label-text">DOB</label>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                  <DatePicker
                    onChange={(date, dateString) =>
                      this.handleDobDateChange(date, dateString)
                    }
                     /* value={this.props.formdata.dob} */ 
                    format={dateFormat}
                  />
                </Col>
              </Row>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <label>{this.props.message}</label>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    formdata: state.adduser.formdata,
    message: state.adduser.message
  };
};

const mapDispatchToProps = dispatch => ({
  formData: payload => dispatch(addUserFormData(payload)),
  addUser: payload => dispatch(addUser(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
