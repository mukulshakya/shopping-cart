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
  InputNumber,
  Collapse,
} from "antd";
import { useRecoilState } from "recoil";
import { errorMsgState, cartListState } from "../recoil/atoms";
import ProductDesc from "../components/product/productDesc";
import Quantity from "../components/quantity";

import TopHeader from "../components/topHeader";
import Body from "../components/home/body";
import Loader from "../components/loader";
import LoginSignupModal from "../components/loginSignupModal";
import CartItem from "../components/cart/cartItem";
import { CheckCircleTwoTone } from "@ant-design/icons";

import { useHistory } from "react-router-dom";

import API from "../services/api";
const { Panel } = Collapse;
function Cart() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [placeOrderLoading, setPlaceOrderLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useRecoilState(errorMsgState);
  const [cart, setCart] = useRecoilState(cartListState);

  const history = useHistory();

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  const fetchCart = async () => {
    setIsLoading(true);
    const response = await API.getCart();
    console.log("cart", response);
    setIsLoading(false);
    if (response.status) setCart([...response.data]);
    else {
      setErrorMsg(response.message);
      setTimeout(() => setErrorMsg(null), 2000);
    }
  };

  const placeOrder = async () => {
    setPlaceOrderLoading(true);
    const payload = {
      products: cart.map(({ productId, quantity }) => ({
        productId,
        quantity,
      })),
    };

    const response = await API.placeOrder({ ...payload });
    setPlaceOrderLoading(false);
    if (response.status) {
      setIsSuccessModalVisible(true);
      await fetchCart();
    } else {
      setErrorMsg(response.message);
      setTimeout(() => setErrorMsg(null), 2000);
    }
  };

  const hideSuccessModal = () => {
    setIsSuccessModalVisible(false);
    return history.push("/");
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const calculateTotal = () =>
    cart.reduce(
      (a, b) => ({
        total: a.total + b.quantity * b.product.discountedPrice,
      }),
      { total: 0 }
    ).total;

  const calculateSavings = () =>
    cart.reduce(
      (a, b) => ({
        total:
          a.total +
          b.quantity * (b.product.actualPrice - b.product.discountedPrice),
      }),
      { total: 0 }
    ).total;

  function callback(key) {
    console.log(key);
  }

  const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
      `;

  return (
    <div>
      <Loader isLoading={isLoading} />
      <TopHeader
        setIsLoginModalVisible={() =>
          setIsLoginModalVisible(!isLoginModalVisible)
        }
      />
      <div
        style={{
          margin: "10px 20%",
          //   display: "grid",
          //   gridTemplateColumns: "70% 30%",
          //   gridGap: 10,
        }}
      >
        <h2>My Orders</h2>
        <Collapse defaultActiveKey={["1"]} onChange={callback}>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" disabled>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>

      {/* <div id="wrapper"> */}
      <Modal
        // title="Modal 1000px width"
        centered
        visible={isSuccessModalVisible}
        onOk={hideSuccessModal}
        onCancel={hideSuccessModal}
        footer={null}
        // width={1000}
      >
        <div style={{ textAlign: "center", paddingTop: 24 }}>
          <CheckCircleTwoTone
            twoToneColor="#52c41a"
            style={{ fontSize: 100, textAlign: "center" }}
          />
          <h3 style={{ marginTop: 20 }}>Order Placed Successfully</h3>
        </div>
      </Modal>
      {/* </div> */}

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

export default Cart;
