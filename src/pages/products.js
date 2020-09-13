import React, { useState, useEffect } from "react";
import "../styles/product.css";
import "antd/dist/antd.css";
import TopHeader from "../components/topHeader";
import Loader from "../components/loader";
import { useLocation, useHistory } from "react-router-dom";
import API from "../services/api";
import { useRecoilState, useResetRecoilState } from "recoil";
import { errorMsgState, productListState } from "../recoil/atoms";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import LoginSignupModal from "../components/loginSignupModal";
import ProductModal from "../components/product/productModal";
import ProductDesc from "../components/product/productDesc";
import { Alert, Card, Menu, Dropdown, Button } from "antd";
import { DownOutlined, LoadingOutlined } from "@ant-design/icons";
const { Meta } = Card;

function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isProductModalVisible, setIsProductModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [errorMsg, setErrorMsg] = useRecoilState(errorMsgState);
  const [products, setProducts] = useRecoilState(productListState);
  const [values, setValues] = useState({});
  const [selectedSort, setSelectedSort] = useState(0);
  const sorts = {
    newest: "Newest",
    "p-lth": "Price Low to High",
    "p-htl": "Price High to Low",
  };
  const resetProducts = useResetRecoilState(productListState);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    fetchProducts();

    return () => resetProducts();
  }, []);

  const fetchProducts = async (params = {}) => {
    setIsLoading(true);
    const { pathname, search } = location;
    const temp = pathname.split("/");
    const categoryId = temp[temp.length - 1];

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

  const getSearch = () =>
    location.search
      ? location.search
          .replace("?", "")
          .split("&")
          .filter((key) => key.startsWith("search"))[0]
          .split("=")[1]
      : "";

  const handleMenuClick = (e) => {
    setSelectedSort(e.key);
    fetchProducts({ sort: e.item.props.value });
  };

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
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0 20px 10px 0",
          }}
        >
          <div>
            <h4>
              {location.search ? (
                <span>
                  <span>Search results for </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "inline-block",
                      marginRight: 15,
                    }}
                  >
                    {getSearch()}
                  </span>
                  <Button
                    type="dashed"
                    size="small"
                    onClick={() => (window.location = "/products")}
                  >
                    Clear
                  </Button>
                </span>
              ) : (
                ""
              )}
            </h4>
          </div>

          <Dropdown
            overlay={
              <Menu onClick={handleMenuClick}>
                {Object.entries(sorts).map(([key, value], index) => (
                  <Menu.Item key={index} value={key}>
                    <span
                      style={{ color: index == selectedSort ? "red" : "black" }}
                    >
                      {value}
                    </span>
                  </Menu.Item>
                ))}
              </Menu>
            }
          >
            <span>
              <span>Sort By </span>
              <span>
                {isLoading && products.length ? (
                  <LoadingOutlined />
                ) : (
                  <DownOutlined />
                )}
              </span>
            </span>
          </Dropdown>
        </div>

        <div
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
