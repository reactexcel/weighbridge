import React from "react";
import { Menu, Icon, Layout, Dropdown, Button } from "antd";
import { Link } from "react-router-dom";
import storageHelper from "../services/offlineService";
import { asyncRepeat } from "../services/checkConnection";
import { connect } from "react-redux";
import { logoutSuccess, loginRedirect } from "../redux/actions";
import { withRouter } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class Dashboard extends React.Component {
  constructor() {
    super();
    window.addEventListener("online", asyncRepeat);
  }
  componentWillMount() {
    storageHelper();
  }
  handleLogout = () => {
    this.props.logout();
  };
  render() {
    console.log(this.props);
    
    const menu = (
      <Menu>
        {this.props.data.length &&
          this.props.data.map((val, index) => {
            return (
              <Menu.Item key={index}>
                <Link to="#">{val.lorrynumber}</Link>
              </Menu.Item>
            );
          })}
      </Menu>
    );

    console.log(this.props.data);

    return (
      <div>
        <Layout>
          <Header>
            <div className="header">
              <h1>WeighBridge</h1>
              <div className="drop-btn">
                <Dropdown overlay={menu} trigger={["click"]}>
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
                  <Link to="/" onClick={this.handleLogout}>
                    {/* <Button onClick={this.handleLogout}> */}
                    <Icon type="poweroff" />
                    Logout
                    {/* </Button> */}
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
const mapStateToProps = state => ({
  data: state.addlorry.data,
  loggedIn: state.login.isSuccess
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutSuccess())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard));
