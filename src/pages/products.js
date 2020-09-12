import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import "../styles/product.css";
import "antd/dist/antd.css";
import TopHeader from "../components/topHeader";
import Body from "../components/home/body";
import ImageCarousel from "../components/home/imageCarousel";
import Loader from "../components/loader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import API from "../services/api";
import { useRecoilState } from "recoil";
import { errorMsgState, productListState } from "../recoil/atoms";
import Carousel, { autoplayPlugin, Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import LoginSignupModal from "../components/loginSignupModal";
import ProductModal from "../components/product/productModal";
import {
  Modal,
  Button,
  Tabs,
  Form,
  Input,
  Checkbox,
  Select,
  Alert,
  Card,
} from "antd";
const { Meta } = Card;

function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isProductModalVisible, setIsProductModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [errorMsg, setErrorMsg] = useRecoilState(errorMsgState);
  const [products, setProducts] = useRecoilState(productListState);
  const [values, setValues] = useState({});

  const location = useLocation();

  const fetchProducts = async () => {
    const temp = location.pathname.split("/");
    const categoryId = temp[temp.length - 1];

    const response = await API.products({ categoryId });

    setIsLoading(false);
    if (response.status) {
      setProducts([...response.data]);
      const values = {};
      response.data.forEach((e, i) => (values[i] = 0));
      setValues({ ...values });
    } else setErrorMsg(response.message);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Loader isLoading={isLoading} />
      <TopHeader
        setIsLoginModalVisible={() =>
          setIsLoginModalVisible(!isLoginModalVisible)
        }
      />
      <div
        id="body"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {products.map((product, index) => (
          <Card
            hoverable
            style={{
              width: 240,
              marginBottom: 20,
            }}
            productId={product._id}
          >
            <div style={{ padding: 10 }}>
              <Carousel
                value={values[index]}
                slides={[
                  ...product.images.map((image) => (
                    <div
                      onClick={(e) => {
                        setIsProductModalVisible(true);
                        setCurrentProduct(product);
                      }}
                      id="image"
                      style={{
                        backgroundImage: `url(${image})`,
                      }}
                    ></div>
                  )),
                ]}
                onChange={(value) => setValues({ ...values, [index]: value })}
              />
              <Dots
                value={values[index]}
                onChange={(value) => setValues({ ...values, [index]: value })}
                number={product.images.length}
              />
            </div>
            <Meta
              onClick={(e) => {
                setIsProductModalVisible(true);
                setCurrentProduct(product);
              }}
              title={product.name}
              description={product.description}
              style={{
                // position: "relative",
                // bottom: 0,
                // width: "100%",
                textAlign: "center",
                // flexGrow: 1,
                padding: 10,
                fontSize: 12,
              }}
            />
          </Card>
        ))}
      </div>
      <div style={{ position: "absolute", zIndex: 10 }}>
        <LoginSignupModal
          isLoginModalVisible={isLoginModalVisible}
          setIsLoginModalVisible={() =>
            setIsLoginModalVisible(!isLoginModalVisible)
          }
        />
        <ProductModal
          product={currentProduct}
          isProductModalVisible={isProductModalVisible}
          setIsProductModalVisible={() =>
            setIsProductModalVisible(!isProductModalVisible)
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

export default Products;
