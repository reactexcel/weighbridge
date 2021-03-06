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
                mode="inline"
                theme="dark"
              >
                <Menu.Item>
                  <Icon type="user" />
                  User/Admin
                </Menu.Item>
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
                  <Link to="/dashboard/searchnedit">
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
                  <Menu.Item key="9">
                    <Link to="/dashboard/adddriverorassistant">
                      Add Driver/Assistant
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="10">
                    <Link to="/dashboard/addlorry">Add Lorry</Link>
                  </Menu.Item>
                  <Menu.Item key="11">
                    <Link to="/dashboard/addsupplier">Add Supplier</Link>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="12">
                  <Link to="/dashboard/payments">
                    <Icon type="wallet" />
                    Payments
                  </Link>
                </Menu.Item>
                <SubMenu
                  key="sub6"
                  title={
                    <span>
                      <Icon type="database" />
                      <span>User Management</span>
                    </span>
                  }
                >
                  <Menu.Item key="13">
                    <Link to="/dashboard/adduser">Add User</Link>
                  </Menu.Item>
                  <Menu.Item key="14">
                    <Link to="/dashboard/deleteuser">Delete User</Link>
                  </Menu.Item>
                  <Menu.Item key="15">
                    {" "}
                    <Link to="/dashboard/modifyuserinfo">Modify User Info</Link>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="16">
                  <Link to="/">
                    <Icon type="poweroff" />
                    Logout
                  </Link>
                </Menu.Item>
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
