import React from "react";
import "antd/dist/antd.css";
import "../styles/loader.css";
import { Layout, Input, Button } from "antd";
import { ShopOutlined, UserOutlined, LoadingOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Search } = Input;

function Loader({ isLoading }) {
  return (
    <div
      id="wrapper"
      style={{
        opacity: isLoading ? 1 : 0,
        position: "absolute",
        zIndex: 999,
        background: "rgba(0,0,0,0.8)",
        transition: "all 500ms",
      }}
    >
      <LoadingOutlined/>
    </div>
  );
}

export default Loader;
