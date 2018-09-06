import React from "react";
import { Table, Icon } from "antd";

class ModifyUserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ]
    };
    this.columns = [
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
        title: "Edit",
        key: "edit",
        align: "center",
        render: (text, record) => (
          <span>
            <a href="#">
              <Icon type="edit" />
            </a>
          </span>
        )
      }
    ];
  }
  render() {
    return (
      <div>
        <div className="dashboard">Modify User Info</div>
        <div className="content">
          <Table
            dataSource={this.state.data}
            columns={this.columns}
            pagination={false}
          />
        </div>
      </div>
    );
  }
}
export default ModifyUserInfo;
