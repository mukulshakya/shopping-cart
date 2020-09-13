import React, { useState, useEffect } from "react";
import "../styles/home.css";
import "antd/dist/antd.css";
import {
  Modal,
  Button,
  Tabs,
  Form,
  Input,
  Checkbox,
  Select,
  Alert,
} from "antd";
import { useRecoilState } from "recoil";
import { errorMsgState, categoryListState } from "../recoil/atoms";

import TopHeader from "../components/topHeader";
import Body from "../components/home/body";
import Loader from "../components/loader";
import LoginSignupModal from "../components/loginSignupModal";

import API from "../services/api";
import { Link } from "react-router-dom";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useRecoilState(errorMsgState);
  const [categories, setCategories] = useRecoilState(categoryListState);

  const fetchCategories = async () => {
    const response = await API.categories();
    console.log(response);
    setIsLoading(false);
    if (response.status) setCategories([...response.data]);
    else {
      setErrorMsg(response.message);
      setTimeout(() => setErrorMsg(null), 2000);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <Loader isLoading={isLoading} />
      <TopHeader
        setIsLoginModalVisible={() =>
          setIsLoginModalVisible(!isLoginModalVisible)
        }
      />
      <div id="body">
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            margin: "10px 0",
          }}
        >
          <Link to="/products">
            <Button type="primary" size="medium">
              View All
            </Button>
          </Link>
        </div>
        <Body categories={categories} />
      </div>
      <div style={{ position: "absolute", zIndex: 10 }}>
        <LoginSignupModal
          isLoginModalVisible={isLoginModalVisible}
          setIsLoginModalVisible={() =>
            setIsLoginModalVisible(!isLoginModalVisible)
          }
        />
      </div>
      {errorMsg && (
        <div id="alert">
          <Alert
            message="Error"
            description={errorMsg}
            type="error"
            closable
            onClose={() => setErrorMsg(null)}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
