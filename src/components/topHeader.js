import React, { useEffect, useState } from "react";
import { Layout, Input, Button, Badge, Tooltip } from "antd";
import {
  ShopOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import UserRedux from "../redux/reducers/user.reducer";
import LoginModalRedux from "../redux/reducers/loginModal.reducer";

const { Header } = Layout;
const { Search } = Input;

function TopHeader({ fetchUser, resetUser, setLoginModalVisible }) {
  const [logoutLoading, setLogoutLoading] = useState(false);
  const {
    user: { data: currentUser },
    cart: { data: cart },
  } = useSelector((state) => state);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    localStorage.getItem("token") && fetchUser();
  }, [fetchUser]);

  const logout = async () => {
    setLogoutLoading(true);
    localStorage.removeItem("token");
    setTimeout(() => {
      resetUser();
      setLogoutLoading(false);
      history.push("/");
    }, 1000);
  };

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
          const base = location.pathname.startsWith("/shopping-cart")
            ? "/shopping-cart"
            : "";

          window.location = `${base}/products?search=${value}`;
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
            <HistoryOutlined style={{ fontSize: "28px", lineHeight: "100%" }} />
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
        <Button icon={<UserOutlined />} onClick={setLoginModalVisible}>
          LOGIN / SIGNUP
        </Button>
      )}
    </Header>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  fetchUser: UserRedux.actions.fetchUserRequest,
  resetUser: UserRedux.actions.resetUser,
  setLoginModalVisible: LoginModalRedux.actions.setLoginModalVisible,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);
