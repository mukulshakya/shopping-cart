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

import API from "../services/api";

function Cart() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [placeOrderLoading, setPlaceOrderLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useRecoilState(errorMsgState);
  const [cart, setCart] = useRecoilState(cartListState);

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  const fetchCart = async () => {
    setIsLoading(true);
    const response = await API.getCart();
    console.log("cart", response);
    setIsLoading(false);
    if (response.status) setCart([...response.data]);
    else setErrorMsg(response.message);
  };

  const placeOrder = async () => {
    setPlaceOrderLoading(true);
    setTimeout(() => {;
      setPlaceOrderLoading(false);
      setIsSuccessModalVisible(true);
    }, 1000);
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
          display: "grid",
          gridTemplateColumns: "70% 30%",
          gridGap: 10,
        }}
      >
        <div style={{ border: "1px solid #ccc" }}>
          <h3 style={{ borderBottom: "1px solid #ccc", paddingLeft: 10 }}>
            My Cart ({cart.length})
          </h3>
          {cart.map((item) => (
            <CartItem item={item} updateCart={fetchCart} />
          ))}
        </div>

        <div style={{ border: "1px solid #ccc" }}>
          <h3 style={{ borderBottom: "1px solid #ccc", paddingLeft: 10 }}>
            Price Details
          </h3>

          <div style={{ margin: "0 10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 10,
              }}
            >
              <span>
                Price ({cart.length} {cart.length > 1 ? "items" : "item"})
              </span>
              <span style={{ textAlign: "right" }}>₹{calculateTotal()}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 10,
                borderBottom: "1px dashed #ccc",
              }}
            >
              <span>Delivery Charges</span>
              <span style={{ color: "green" }}>FREE</span>
            </div>

            <div style={{ fontSize: 11, padding: "10px 0" , textAlign: "center"}}>
              You will save{" "}
              <span style={{ color: "green" }}>₹{calculateSavings()}</span> on
              this order
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 15,
              }}
            >
              <Button
                type="danger"
                loading={placeOrderLoading}
                onClick={placeOrder}
              >
                PLACE ORDER
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="wrapper"> */}
      <Modal
        // title="Modal 1000px width"
        centered
        visible={isSuccessModalVisible}
        onOk={() => setIsSuccessModalVisible(false)}
        onCancel={() => setIsSuccessModalVisible(false)}
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
