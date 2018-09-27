import React from "react";
import { Table, Icon, Divider, Button } from "antd";
import { connect } from "react-redux";
import { getUser, deleteUser } from "../redux/actions";

class ModifyUserInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getUser();
  }
  handleDelete = record => {
    console.log(record);
    this.props.deleteUser(record.UserId.S);
  };
  render() {
    const columns = [
      {
        title: "User Name",
        dataIndex: '["Username"].S',
        key: "Username",
        width: "20%"
      },
      {
        title: "Email",
        dataIndex: '["UserId"].S',
        key: "Userid",
        width: "20%"
      },
      {
        title: "Type",
        dataIndex: '["UserType"].S',
        key: "UserType",
        width: "15%"
      },
      {
        title: "Date Of Birth",
        dataIndex: '["Dob"].S',
        key: "Dob",
        width: "10%"
      },
      {
        title: "Address",
        dataIndex: '["Address"].S',
        key: "Address",
        width: "20%"
      },
      {
        title: "Edit/Delete",
        key: "edit",
        align: "center",
        render: (text, record) => (
          <span>
            <Button size="small">
              <Icon type="edit" />
            </Button>
            <Divider type="vertical" />
            <Button size="small" onClick={() => this.handleDelete(record)}>
              <Icon type="delete" />
            </Button>
          </span>
        )
      }
    ];
    return (
      <div>
        <div className="dashboard">Modify User Info</div>
        <div className="content">
          <Table
            dataSource={this.props.data}
            columns={columns}
            pagination={false}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.modifyuserinfo.data
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  deleteUser: data => dispatch(deleteUser(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModifyUserInfo);
