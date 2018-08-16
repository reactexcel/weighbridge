import React from "react";
import { Menu, Icon, Layout, Dropdown, Button } from "antd";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
class Dashboard extends React.Component {
  menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">Lori No WW112</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">Lori No WW113</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="#">Lori No WW114</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="#">Lori No WW116</a>
      </Menu.Item>
      <Menu.Item key="5">
        <a href="#">Lori No WW2239</a>
      </Menu.Item>
      <Menu.Item key="6">
        <a href="#">Lori No VG987</a>
      </Menu.Item>
    </Menu>
  );
  render() {
    return (
      <div>
        <Layout>
          <Header>
            <div className="header">
              <h1>WeighBridge</h1>
              <div className="drop-btn">
                <Dropdown overlay={this.menu} trigger={["click"]}>
                  <Button>
                    <Icon type="down" />
                  </Button>
                </Dropdown>
              </div>
            </div>
          </Header>
          <Layout>
            <Sider breakpoint="sm" collapsedWidth="0">
              <Menu
                style={{ width: 200, minHeight: "100vh" }}
                defaultOpenKeys={["sub1"]}
                mode="vertical"
                theme="dark"
              >
                <Menu.Item key="1">
                  <Link to="/dashboard">
                    <Icon type="dashboard" />
                    Dashboard
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/dashboard/weightentry">
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
            </Sider>
            <Content>{this.props.children}</Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Dashboard;
