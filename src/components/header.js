import React from "react";
import "antd/dist/antd.css";
import "../styles/header.css";
import { Layout, Input, Button } from "antd";
import { ShopOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Search } = Input;

function TopHeader() {
  return (
      <Header style={{ background: "white", padding: "0 20%" }}>
      <div id="logo">
        <ShopOutlined />
        <span>&nbsp;SHOP</span>
      </div>
      <Search
        style={{ width: "70%", "justify-content": "center" }}
        placeholder="input search text"
        onSearch={(value) => console.log(value)}
        enterButton
      />
      <Button icon={<UserOutlined />}>LOGIN</Button>
      </Header>
  );
}

export default TopHeader;
