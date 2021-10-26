import React, { Fragment, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./index.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminTemplate = (props) => {
  const { Component, history, ...restProps } = props;

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let checkUser = JSON.parse(localStorage.getItem("UserCustomer"));

  if (checkUser?.maLoaiNguoiDung != "QuanTri") {
    return <Redirect to="/" />;
  }

  const logOutAdmin = () => {
    localStorage.removeItem("UserCustomer");
    alert("Đã đăng xuất!");
    history.push("/login");
  };

  const operations = (
    <Fragment>
      <div className="logout-container">
        <span className="logout-username">{checkUser.hoTen}</span>
        <button className="logout-button" onClick={() => logOutAdmin()}>
          Logout
        </button>
      </div>
    </Fragment>
  );

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo">
                  <NavLink to="/">
                    <img src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png" />
                  </NavLink>
                </div>
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <Menu.Item key="1" icon={<PieChartOutlined />}>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<DesktopOutlined />}>
                    <NavLink to="/add-user">Adduser</NavLink>
                  </Menu.Item>
                  <SubMenu key="sub1" icon={<FileOutlined />} title="Film">
                    <Menu.Item key="5" icon={<FileOutlined />}>
                      <NavLink to="/film">Films</NavLink>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<FileOutlined />}>
                      <NavLink to="/films/addnewfilm">Add Film</NavLink>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header
                  className="site-layout-background"
                  style={{ padding: 0 }}
                >
                  <div className="text-right pr-10 pt-1 text-white">
                    {operations}
                  </div>
                </Header>
                <Content style={{ margin: "0 16px" }}>
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                  </Breadcrumb>
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: "85vh" }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                  Ant Design ©2018 Created by Ant UED
                </Footer>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    ></Route>
  );
};

export default AdminTemplate;
