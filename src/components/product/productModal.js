import React, { useState,useEffect } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import { Link, useHistory } from "react-router-dom";
import { Modal, Button } from "antd";
import { useSelector, connect } from "react-redux";
import ProductDesc from "./productDesc";
import ErrorMsgRedux from "../../redux/reducers/errorMsg.reducer";
import CartRedux from "../../redux/reducers/cart.reducer";

function ProductModal({
  product,
  isProductModalVisible,
  setIsProductModalVisible,
  addToCartRequest,
  setErrorMsg,
  resetErrorMsg,
}) {
  const [value, setValue] = useState(0);
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [buyNowLoading, setBuyNowLoading] = useState(false);
  const [currentType, setCurrentType] = useState(null);

  const {
    cart: { data: cart },
    user: { data: currentUser },
  } = useSelector((state) => state);

  useEffect(() => {
    if (currentType === "buy") setBuyNowLoading(true);
    else if (currentType === "cart") setAddToCartLoading(true);
  }, [currentType]);

  const history = useHistory();

  const addToCart = async (type) => {
    if (!currentUser)
      return (
        setErrorMsg("You need to login first"),
        setTimeout(() => resetErrorMsg(), 2000)
      );

    if (type === "buy") setCurrentType("buy");
    else setCurrentType("cart");

    addToCartRequest({ productId: product._id, quantity: 1 });

    setAddToCartLoading(false);
    setBuyNowLoading(false);
    type === "buy" && history.push("/cart");
  };

  const isOnCart = () => {
    const index = cart.findIndex((item) => item.productId === product._id);
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
                    <Button type="primary" onClick={() => true}>
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

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  addToCartRequest: CartRedux.actions.addToCartRequest,
  setErrorMsg: ErrorMsgRedux.actions.setErrorMsg,
  resetErrorMsg: ErrorMsgRedux.actions.resetErrorMsg,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
