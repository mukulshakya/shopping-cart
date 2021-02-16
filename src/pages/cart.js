import React, { useState, useEffect } from "react";
import { Modal, Button, Alert } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ProductModal from "../components/product/productModal";
import TopHeader from "../components/topHeader";
import Loader from "../components/loader";
import LoginSignupModal from "../components/loginSignupModal";
import CartItem from "../components/cart/cartItem";
import CartRedux from "../redux/reducers/cart.reducer";
import OrdersRedux from "../redux/reducers/orders.reducer";

function Cart({ fetchCart, resetCart, placeOrderRequest }) {
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [placeOrderLoading, setPlaceOrderLoading] = useState(false);
  const [isProductModalVisible, setIsProductModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const history = useHistory();

  const {
    cart: { data: cart, loading: isLoading },
    error: { message: errorMsg },
  } = useSelector((state) => state);

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  useEffect(() => {
    fetchCart();
    return () => resetCart();
  }, [fetchCart, resetCart]);

  const placeOrder = async () => {
    setPlaceOrderLoading(true);
    const payload = {
      products: cart.map(({ productId, quantity }) => ({
        productId,
        quantity,
      })),
    };

    new Promise((resolve, reject) => {
      console.log({ payload });
      placeOrderRequest({ resolve, reject, payload });
    })
      .then(() => setIsSuccessModalVisible(true))
      .finally(() => setPlaceOrderLoading(false));
  };

  const hideSuccessModal = () => {
    setIsSuccessModalVisible(false);
    return history.push("/");
  };

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
      <TopHeader />
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
            <CartItem
              item={item}
              setCurrentProduct={(product) => setCurrentProduct(product)}
              setIsProductModalVisible={() => setIsProductModalVisible(true)}
            />
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

            <div
              style={{ fontSize: 11, padding: "10px 0", textAlign: "center" }}
            >
              You will save{" "}
              <span style={{ color: "green" }}>₹{calculateSavings()}</span> on
              this order
            </div>
            {!!cart.length && (
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
            )}
          </div>
        </div>
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

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  fetchCart: CartRedux.actions.fetchCartRequest,
  resetCart: CartRedux.actions.resetCart,
  placeOrderRequest: OrdersRedux.actions.placeOrderRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
