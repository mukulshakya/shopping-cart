import React, { useState } from "react";
import "../styles/loader.css";
import API from "../services/api";
import AlertMessage from "./alertMessage";
import { useRecoilState } from "recoil";
import { errorMsgState } from "../recoil/atoms";
import { LoadingOutlined } from "@ant-design/icons";
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
const { TabPane } = Tabs;

const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };
const tailLayout = { wrapperCol: { offset: 8, span: 16 } };

function LoginForm() {
  const [errorMsg, setErrorMsg] = useRecoilState(errorMsgState);
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    setIsLoading(true);
    console.log("Success:", values);
    const response = await API.login(values);
    !response.status && setErrorMsg(response.message);
    setIsLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" disabled={isLoading}>
          {isLoading ? (
            <LoadingOutlined style={{ color: "black" }} />
          ) : (
            "Submit"
          )}
        </Button>
      </Form.Item>
    </Form>
  );
}

function LoginSignupModal({ isLoginModalVisible, setIsLoginModalVisible }) {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <div id="wrapper">
      <Modal
        // title="Modal 1000px width"
        centered
        visible={isLoginModalVisible}
        onOk={setIsLoginModalVisible}
        onCancel={setIsLoginModalVisible}
        footer={null}
        // width={1000}
      >
        <Tabs defaultActiveKey="1" onChange={(key) => setCurrentTab(key)}>
          {["Login", "Sign Up", "Admin Login"].map((name, index) => (
            <TabPane tab={name} key={index + 1}>
              <LoginForm currentTab={currentTab} />
            </TabPane>
          ))}
        </Tabs>
      </Modal>
    </div>
  );
}

export default LoginSignupModal;
