import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "../styles/header.css";
import { Layout, Input, Button, Badge, Tooltip } from "antd";
import {
  ShopOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import API from "../services/api";
import { currentUserState, cartListState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import { Link, useLocation, useHistory } from "react-router-dom";

const { Header } = Layout;
const { Search } = Input;

function TopHeader({ setIsLoginModalVisible }) {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [cart, setCart] = useRecoilState(cartListState);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const location = useLocation();
  const history = useHistory();
  console.log({ location });

  const checkLogin = async () => {
    const response = await API.profile();
    response.status && setCurrentUser({ ...response.data });
    const cart = await API.getCart();
    cart.status && setCart(cart.data);
  };

  const logout = async () => {
    setLogoutLoading(true);
    localStorage.removeItem("token");
    setTimeout(() => {
      setCurrentUser(null);
      setLogoutLoading(false);
      history.push("/");
    }, 1000);
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
        onSearch={(value) => {
          console.log(value);
          window.location = location.pathname.startsWith("/products")
            ? `${location.pathname}?search=${value}`
            : `/products?search=${value}`;
        }}
        enterButton
      />

      {currentUser && (
        <Link to="/cart">
          <Badge count={cart.length}>
            <Tooltip title="Cart">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", lineHeight: "100%" }}
              />
            </Tooltip>
          </Badge>
        </Link>
      )}

      {currentUser && (
        <Link to="/orders">
          <Tooltip title="Orders">
            <ShoppingOutlined
              style={{ fontSize: "30px", lineHeight: "100%" }}
            />
          </Tooltip>
        </Link>
      )}

      {currentUser ? (
        <Tooltip title={currentUser.email}>
          <Button
            icon={<UserOutlined />}
            onClick={logout}
            style={{ marginLeft: 3 }}
            loading={logoutLoading}
          >
            LOGOUT
          </Button>
        </Tooltip>
      ) : (
        <Button icon={<UserOutlined />} onClick={setIsLoginModalVisible}>
          LOGIN / SIGNUP
        </Button>
      )}
    </Header>
  );
}

export default TopHeader;
