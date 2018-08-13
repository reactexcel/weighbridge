import React from "react";
import { Menu, Icon, Layout } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
class Sidemenu extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <div className="logo" />
        </Header>
        <Menu
          style={{ width: 256, minHeight: "100vh" }}
          defaultOpenKeys={["sub1"]}
          mode="vertical"
          theme="dark"
        >
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="dashboard" />
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/weighentry">
              <Icon type="area-chart" />
              Weigh Entry
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/searchandedit">
              <Icon type="table" />
              Search &amp; Edit
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="tool" />
                <span>Report</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="file" />
                <span>Operations</span>
              </span>
            }
          >
            <Menu.Item key="9">Add Driver/Assistant</Menu.Item>
            <Menu.Item key="10">Add Lorry</Menu.Item>
            <Menu.Item key="11">Add Supplier</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="barcode" />
                <span>Payment</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Sidemenu;
