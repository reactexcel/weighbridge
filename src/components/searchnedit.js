import React from "react";
import { Input, Table, Icon, Divider, Radio } from "antd";
import { connect } from "react-redux";
import { searchEditFormData, searchEdit } from "../redux/actions";

const Search = Input.Search;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class SearchnEdit extends React.Component {
  handleSearch = value => {
    if (value !== "") {
      this.props.searchEdit({ search: this.props.searchWhat, value: value });
    }
  };
  render() {
    let columns = [];
    let dataSource = [this.props.data];
    let noData;
    if (Object.keys(this.props.data).length !== 0) {
      noData = "";
      if (this.props.data["Ticket No"]) {
        columns = [
          {
            title: "Ticket No.",
            dataIndex: "['Ticket No'].S",
            key: "tno",
            width: "10%"
          },
          {
            title: "Lorry No.",
            dataIndex: "['Lorry Number'].S",
            key: "lno",
            width: "10%"
          },
          {
            title: "Supplier Origin",
            dataIndex: "['Supplier Origin'].S",
            key: "so",
            width: "12%"
          },
          {
            title: "Supplier Name",
            dataIndex: "['supplier Name'].S",
            key: "sn",
            width: "10%"
          },
          {
            title: "Driver1 Name",
            dataIndex: "['Driver Name1'].S",
            key: "dn1",
            width: "12%"
          },
          {
            title: "Net Weigh",
            dataIndex: "['Net Weight'].N",
            key: "nw",
            width: "10%"
          },
          {
            title: "",
            key: "action",
            render: (text, record) => (
              <span>
                <Icon type="user" />
                <Divider type="vertical" />
                <Icon type="edit" />
                <Divider type="vertical" />
                <Icon type="delete" />
              </span>
            )
          }
        ];
      } else if (this.props.data["Number Plate"]) {
        columns = [
          {
            title: "Lorry Number",
            dataIndex: "['Number Plate'].S",
            key: "lno",
            width: "10%"
          },
          {
            title: "Weight W/o Load",
            dataIndex: "['Weight W/o Load'].S",
            key: "wwl",
            width: "10%"
          },
          {
            title: "Driver Name1",
            dataIndex: "['Driver Name1'].S",
            key: "dn1",
            width: "12%"
          },
          {
            title: "Driver Name2",
            dataIndex: "['Driver Name2'].S",
            key: "dn2",
            width: "12%"
          },
          {
            title: "Co-Driver1",
            dataIndex: "['Co-Driver1'].S",
            key: "cd1",
            width: "12%"
          },
          {
            title: "Co-Driver2",
            dataIndex: "['Co-Driver2'].S",
            key: "cd2",
            width: "12%"
          },
          {
            title: "",
            key: "action",
            render: (text, record) => (
              <span>
                <Icon type="user" />
                <Divider type="vertical" />
                <Icon type="edit" />
                <Divider type="vertical" />
                <Icon type="delete" />
              </span>
            )
          }
        ];
      } else if (this.props.data["Supplier Id"]) {
        columns = [
          {
            title: "Supplier Id",
            dataIndex: "['Supplier Id'].S",
            key: "sid",
            width: "10%"
          },
          {
            title: "DOB",
            dataIndex: "['Date Of Birth'].S",
            key: "dob",
            width: "10%"
          },
          {
            title: "Phone No.",
            dataIndex: "['Phone No'].S",
            key: "pn",
            width: "12%"
          },
          {
            title: "License",
            dataIndex: "['License'].S",
            key: "lic",
            width: "10%"
          },
          {
            title: "Expiry Date",
            dataIndex: "['Expiry Date'].S",
            key: "ed",
            width: "12%"
          },
          {
            title: "Net Weigh",
            dataIndex: "['Net Weight'].N",
            key: "nw",
            width: "10%"
          },
          {
            title: "",
            key: "action",
            render: (text, record) => (
              <span>
                <Icon type="user" />
                <Divider type="vertical" />
                <Icon type="edit" />
                <Divider type="vertical" />
                <Icon type="delete" />
              </span>
            )
          }
        ];
      }
    } else {
      noData = "No data Found";
    }
    return (
      <div>
        <div className="dashboard">Search &amp; Edit</div>
        <div className="content">
          <Search
            placeholder="input search text"
            onSearch={value => this.handleSearch(value)}
            enterButton="Search"
            style={{ width: 300 }}
          />
          <Table dataSource={dataSource} columns={columns} pagination={false} />
          <div>
            <label>{noData}</label>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchWhat: state.searchnedit.searchwhat,
    data: state.searchnedit.data
  };
};
const mapDispatchToProps = dispatch => ({
  formData: data => dispatch(searchEditFormData(data)),
  searchEdit: payload => dispatch(searchEdit(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchnEdit);
