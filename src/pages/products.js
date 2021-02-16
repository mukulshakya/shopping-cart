import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import { Alert, Card, Menu, Dropdown, Button } from "antd";
import { DownOutlined, LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import TopHeader from "../components/topHeader";
import Loader from "../components/loader";
import LoginSignupModal from "../components/loginSignupModal";
import ProductModal from "../components/product/productModal";
import ProductDesc from "../components/product/productDesc";
import ProductsRedux from "../redux/reducers/products.reducer";

const { Meta } = Card;

function Products() {
  const [isProductModalVisible, setIsProductModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [values, setValues] = useState({});
  const [selectedSort, setSelectedSort] = useState(0);
  const sorts = {
    newest: "Newest",
    "p-lth": "Price Low to High",
    "p-htl": "Price High to Low",
  };

  const location = useLocation();

  const dispatch = useDispatch();
  const {
    products: { data: products, loading: isLoading },
    error: { message: errorMsg },
  } = useSelector((state) => state);

  useEffect(() => {
    fetchProducts();

    return () => dispatch(ProductsRedux.actions.resetProducts());
  }, []);

  useEffect(() => {
    const values = {};
    products.forEach((e, i) => (values[i] = 0));
    setValues({ ...values });
  }, [products]);

  const fetchProducts = async (params = {}) => {
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

    if (products)
      if (!products.length || Object.keys(params).length)
        dispatch(ProductsRedux.actions.fetchProductsRequest(params));
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
      <TopHeader />
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
                      style={{
                        color:
                          parseInt(index) === parseInt(selectedSort)
                            ? "red"
                            : "black",
                      }}
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
        <LoginSignupModal />
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
          <Alert message="Error" description={errorMsg} type="error" closable />
        </div>
      )}
    </div>
  );
}

export default Products;
