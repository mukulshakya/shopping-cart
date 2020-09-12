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
import { errorMsgState, categoryListState } from "../recoil/atoms";
import ProductDesc from "../components/product/productDesc";
import Quantity from "../components/quantity";

import TopHeader from "../components/topHeader";
import Body from "../components/home/body";
import Loader from "../components/loader";
import LoginSignupModal from "../components/loginSignupModal";
import CartItem from "../components/cart/cartItem";

import API from "../services/api";

function Cart() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useRecoilState(errorMsgState);
  const [categories, setCategories] = useRecoilState(categoryListState);

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  const fetchCategories = async () => {
    const response = await API.categories();
    console.log(response);
    setIsLoading(false);
    if (response.status) setCategories([...response.data]);
    else setErrorMsg(response.message);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const productDummy = {
    actualPrice: 222999,
    category: {
      _id: "5f5c5cd36593643cb5d872ff",
      name: "Appliances",
      image: "https://i.imgur.com/LXcsMb7.jpg",
    },
    createdAt: "2020-09-12T05:29:55.932Z",
    description:
      "Samsung The Frame 163cm (65 inch) Ultra HD (4K) QLED Smart TV (QA65LS03TAKXXL)",
    discountedPrice: 149999,
    features: (5)[
      ("Supported Apps: Netflix|Prime Video|Apple TV|Disney+Hotstar|Youtube",
      "Operating System: Tizen",
      "Resolution: Ultra HD (4K) 3840 x 2160 Pixels",
      "Sound Output: 40 W",
      "Refresh Rate: 120 Hz")
    ],
    images: (5)[
      ("https://i.imgur.com/AzW1VNK.jpg",
      "https://i.imgur.com/vM0fRzx.jpg",
      "https://i.imgur.com/AzW1VNK.jpg",
      "https://i.imgur.com/vM0fRzx.jpg",
      "https://i.imgur.com/AzW1VNK.jpg")
    ],
    name: "SAMSUNG 65 inch 4k TV",
    sizes: [],
    stockCount: 39,
    updatedAt: "2020-09-12T05:29:55.932Z",
    views: 0,
    _id: "5f5c5cd36593643cb5d873",
  };

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
          //   width: "70% !important",
          //   display: "flex",
          display: "grid",
          gridTemplateColumns: "70% 30%",
          gridGap: 10,
        }}
      >
        <div style={{ border: "1px solid #ccc" }}>
          <h3 style={{ borderBottom: "1px solid #ccc", paddingLeft: 10 }}>
            My Cart ({12})
          </h3>
          {Array(4)
            .fill("")
            .map((item) => (
              <CartItem />
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
              <span>Price ({2} items)</span>
              <span style={{ textAlign: "right" }}>₹{5190}</span>
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
              <span>FREE</span>
            </div>

            <div style={{ fontSize: 11, padding: "10px 0" }}>
              You will save ₹{4000} on this order
            </div>
          </div>
        </div>
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

export default Cart;
