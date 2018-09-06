import React from "react";
import { Table, Icon } from "antd";

const dataSource = [
  { 
    key: 1,
    uid: "abc",
    uname: "xyz",
    type: "Payout User"
  },
  {
    key: 2,
    uid: "abc",
    uname: "xyz",
    type: "Data Entry User"
  }
];
const columns = [
  {
    title: "User Name",
    dataIndex: "uname",
    key: "uname",
    width: "30%"
  },
  {
    title: "Email",
    dataIndex: "uid",
    key: "uid",
    width: "30%"
  },
  {
    title: "type",
    dataIndex: "type",
    key: "type",
    width: "30%"
  },
  {
    title: "delete",
    key: "del",
    align: "center",
    render: () => (
      <span>
        <a href="#">
          <Icon type="delete" />
        </a>
      </span>
    )
  }
];
class DeleteUser extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="dashboard">Delete User</div>
        <div className="content">
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
      </div>
    );
  }
}

export default DeleteUser;
