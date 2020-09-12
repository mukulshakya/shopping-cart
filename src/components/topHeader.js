import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "../styles/header.css";
import { Layout, Input, Button, Badge } from "antd";
import {
  ShopOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import API from "../services/api";
import { currentUserState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

const { Header } = Layout;
const { Search } = Input;

function TopHeader({ setIsLoginModalVisible }) {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  const checkLogin = async () => {
    const user = await API.profile();
    user && setCurrentUser(user);
  };

  useEffect(() => {
    console.log("header");
    checkLogin();
  }, []);

  return (
    <Header style={{ background: "white", padding: "0 20%", fontSize: "25px" }}>
      <Link to="/">
        <div id="logo">
          <ShopOutlined />
          <span>&nbsp;SHOP</span>
        </div>
      </Link>
      <Search
        style={{ width: "50%", "justify-content": "center", margin: "0 20px" }}
        placeholder="input search text"
        onSearch={(value) => console.log(value)}
        enterButton
      />
      <Link to="/cart">
        <Badge count={5}>
          <ShoppingCartOutlined style={{ fontSize: "30px" }} />
        </Badge>
      </Link>
      {!currentUser && (
        <Button icon={<UserOutlined />} onClick={setIsLoginModalVisible}>
          LOGIN / SIGNUP
        </Button>
      )}
    </Header>
  );
}

export default TopHeader;
