import React from "react";
import { Input, Table, Icon, Divider, Radio } from "antd";

const Search = Input.Search;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
class SearchnEdit extends React.Component {
  render() {
    const dataSource = [
      {
        key: "1",
        tno: "123456",
        lno: "MMM1234",
        so: "Benut",
        sn: "Ali Ahmad",
        dn1: "Mohd Ha",
        dn2: "Siti Jam",
        ae: "Y",
        nw: "100 kg"
      },
      {
        key: "2",
        tno: "123456",
        lno: "MMM1234",
        so: "Benut",
        sn: "Ali Ahmad",
        dn1: "Mohd Ha",
        dn2: "Siti Jam",
        ae: "Y",
        nw: "100 kg"
      }
    ];

    const columns = [
      {
        title: "Ticket No.",
        dataIndex: "tno",
        key: "tno",
        width: "10%"
      },
      {
        title: "Lorry No.",
        dataIndex: "lno",
        key: "lno",
        width: "10%"
      },
      {
        title: "Supplier Origin",
        dataIndex: "so",
        key: "so",
        width: "12%"
      },
      {
        title: "Supplier Name",
        dataIndex: "sn",
        key: "sn",
        width: "10%"
      },
      {
        title: "Driver1 Name",
        dataIndex: "dn1",
        key: "dn1",
        width: "12%"
      },
      {
        title: "Driver2 Name",
        dataIndex: "dn2",
        key: "dn2",
        width: "10%"
      },
      {
        title: "Auto Entry",
        dataIndex: "ae",
        key: "ae",
        width: "8%"
      },
      {
        title: "Net Weigh",
        dataIndex: "nw",
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

    return (
      <div>
        <div className="dashboard">Search &amp; Edit</div>
        <div className="content">
          <RadioGroup /* onChange={onChange} */ defaultValue="a">
            <RadioButton value="a">Search Ticket</RadioButton>
            <RadioButton value="b">Search Lorry</RadioButton>
            <RadioButton value="c">Search Supplier</RadioButton>
          </RadioGroup>
          <Search
            placeholder="input search text"
            onSearch={value => {}}
            enterButton="Search"
            style={{ width: 300 }}
          />

          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
      </div>
    );
  }
}

export default SearchnEdit;
