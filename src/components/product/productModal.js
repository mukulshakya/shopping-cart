import React, { useState } from "react";
import API from "../../services/api";
import AlertMessage from "../alertMessage";
import { useRecoilState } from "recoil";
import { errorMsgState, cartListState } from "../../recoil/atoms";
import { LoadingOutlined } from "@ant-design/icons";
import Carousel, { autoplayPlugin, Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import ProductDesc from "./productDesc";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  Redirect,
} from "react-router-dom";
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

const imageStyle = {};

function ProductModal({
  product,
  isProductModalVisible,
  setIsProductModalVisible,
}) {
  const [value, setValue] = useState(0);
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [buyNowLoading, setBuyNowLoading] = useState(false);
  const [cart, setCart] = useRecoilState(cartListState);

  console.log(product);

  const addToCart = async (type) => {
    if (type === "buy") setBuyNowLoading(true);
    else setAddToCartLoading(true);

    setTimeout(async () => {
      const response = await API.addToCart({
        productId: product._id,
        quantity: 1,
      });
      console.log("res - ", response);
      const cart = await API.getCart();
      cart.status && setCart(cart.data);
      setAddToCartLoading(false);
      setBuyNowLoading(false);
      if (type === "buy") window.location = "/cart";
    }, 1000);
  };

  const isOnCart = () => {
    const index = cart.findIndex((item) => item.productId === product._id);
    console.log({ index });
    return index === -1 ? false : true;
  };

  return (
    <div>
      <div>
        <Modal
          centered
          visible={isProductModalVisible}
          onOk={() => {
            setIsProductModalVisible();
            setValue(0);
          }}
          onCancel={() => {
            setIsProductModalVisible();
            setValue(0);
          }}
          footer={null}
        >
          {product && (
            <div>
              <div>
                <div style={{ padding: 10 }}>
                  <Carousel
                    value={value}
                    slides={[
                      ...product.images.map((image) => (
                        <div
                          id="image"
                          style={{
                            backgroundImage: `url(${image})`,
                          }}
                        ></div>
                      )),
                    ]}
                    onChange={(value) => setValue(value)}
                  />
                  <Dots
                    value={value}
                    onChange={(value) => setValue(value)}
                    number={product.images.length}
                    thumbnails={[
                      ...product.images.map((image) => (
                        <div
                          id="image"
                          style={{
                            backgroundImage: `url(${image})`,
                            width: 30,
                            height: 30,
                            padding: 0,
                          }}
                        ></div>
                      )),
                    ]}
                  />
                </div>
              </div>

              <div>
                <ProductDesc product={product} />
                <div>
                  <h4 style={{ marginTop: 10 }}>Highlights</h4>
                  <ul style={{ fontSize: 10, marginLeft: 20 }}>
                    {product.features.map((feature) => (
                      <li>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                style={{
                  width: "65%",
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                {isOnCart() ? (
                  <Link to="/cart">
                    <Button
                      type="primary"
                      loading={addToCartLoading}
                      // onClick={addToCart}
                    >
                      GO TO CART
                    </Button>
                  </Link>
                ) : (
                  <Button
                    type="primary"
                    loading={addToCartLoading}
                    onClick={addToCart}
                  >
                    ADD TO CART
                  </Button>
                )}

                <Button
                  type="danger"
                  loading={buyNowLoading}
                  onClick={() => addToCart("buy")}
                >
                  BUY NOW
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default ProductModal;
