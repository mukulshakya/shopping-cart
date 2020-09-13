import React, { useState, useEffect } from "react";
import "../styles/product.css";
import "antd/dist/antd.css";
import TopHeader from "../components/topHeader";
import Loader from "../components/loader";
import { useLocation } from "react-router-dom";
import API from "../services/api";
import { useRecoilState } from "recoil";
import { errorMsgState, productListState } from "../recoil/atoms";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import LoginSignupModal from "../components/loginSignupModal";
import ProductModal from "../components/product/productModal";
import ProductDesc from "../components/product/productDesc";
import { Alert, Card } from "antd";
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

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { pathname, search } = location;
    const temp = pathname.split("/");
    const categoryId = temp[temp.length - 1];

    const params = {};
    temp.length > 2 && Object.assign(params, { categoryId });

    search
      .replace("?", "")
      .split("&")
      .forEach((param) => {
        const [key, value] = param.split("=");
        params[key] = value;
      });

    const response = await API.products(params);

    setIsLoading(false);
    if (response.status) {
      setProducts([...response.data]);
      const values = {};
      response.data.forEach((e, i) => (values[i] = 0));
      setValues({ ...values });
    } else {
      setErrorMsg(response.message);
      setTimeout(() => setErrorMsg(null), 2000);
    }
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
            <div style={{ textAlign: "center" }}>
              {/* <h3>{product.name}</h3> */}
              <ProductDesc product={product} />
            </div>

            <Meta
              onClick={(e) => {
                setIsProductModalVisible(true);
                setCurrentProduct(product);
              }}
              description={product.description}
              style={{ textAlign: "center", padding: 10, fontSize: 12 }}
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
