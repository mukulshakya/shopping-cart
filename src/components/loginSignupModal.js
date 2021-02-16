import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Modal, Button, Tabs, Form, Input } from "antd";
import { useSelector, connect } from "react-redux";
import UserRedux from "../redux/reducers/user.reducer";
import LoginModalRedux from "../redux/reducers/loginModal.reducer";

const { TabPane } = Tabs;

const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };
const tailLayout = { wrapperCol: { offset: 8, span: 16 } };

function LoginForm({ currentTab, registerUser, loginUser, isLoading }) {
  const onFinish = async (values) => {
    if (parseInt(currentTab) === 2) registerUser({ ...values });
    else loginUser({ ...values });
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
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

function LoginSignupModal({ registerUser, loginUser, setLoginModalVisible }) {
  const [currentTab, setCurrentTab] = useState(1);
  const {
    user: { loading: isLoading },
    loginModal: { isVisible },
  } = useSelector((state) => state);

  return (
    <div id="wrapper">
      <Modal
        centered
        visible={isVisible}
        onOk={setLoginModalVisible}
        onCancel={setLoginModalVisible}
        footer={null}
      >
        <Tabs defaultActiveKey="1" onChange={(key) => setCurrentTab(key)}>
          {["Login", "Sign Up"].map((name, index) => (
            <TabPane tab={name} key={index + 1}>
              <LoginForm
                currentTab={currentTab}
                registerUser={registerUser}
                loginUser={loginUser}
                isLoading={isLoading}
              />
            </TabPane>
          ))}
        </Tabs>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  registerUser: UserRedux.actions.registerUserRequest,
  loginUser: UserRedux.actions.loginUserRequest,
  setLoginModalVisible: LoginModalRedux.actions.setLoginModalVisible,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignupModal);
