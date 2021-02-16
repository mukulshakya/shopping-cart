import React, { useState, useEffect } from "react";
import { Modal, Alert, Collapse } from "antd";
import { CheckCircleTwoTone, HomeOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import ProductModal from "../components/product/productModal";
import TopHeader from "../components/topHeader";
import Loader from "../components/loader";
import LoginSignupModal from "../components/loginSignupModal";
import OrdersRedux from "../redux/reducers/orders.reducer";

const { Panel } = Collapse;

function Orders({ fetchOrders, resetOrders }) {
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isProductModalVisible, setIsProductModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const history = useHistory();

  const {
    orders: { data: orders, loading: isLoading },
    error: { message: errorMsg },
  } = useSelector((state) => state);

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  useEffect(() => {
    fetchOrders();

    return () => resetOrders();
  }, [fetchOrders, resetOrders]);

  const calcDeliveryDate = (order) => {
    const deliveryDate = new Date(order.createdAt);
    deliveryDate.setDate(deliveryDate.getDate() + 3);

    return (
      (deliveryDate > new Date() ? "To be delivered by " : "Delivered on ") +
      deliveryDate.toDateString()
    );
  };

  const hideSuccessModal = () => {
    setIsSuccessModalVisible(false);
    return history.push("/");
  };

  return (
    <div>
      <Loader isLoading={isLoading} />
      <TopHeader />
      <div style={{ margin: "10px 20%" }}>
        <h2>My Orders</h2>
        <Collapse>
          {orders.map((order) => (
            <Panel
              header={"Order No : " + order._id}
              key={order._id}
              extra={
                <div>
                  <HomeOutlined style={{ color: "#52c41a" }} />
                  <span> {calcDeliveryDate(order)}</span>
                </div>
              }
            >
              {order.products.map(({ product, quantity }) => (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "10% 50% 20% 20%",
                    borderBottom: "1px solid #ccc",
                    padding: "0 10px",
                  }}
                >
                  <div
                    onClick={() => {
                      setCurrentProduct(product);
                      setIsProductModalVisible(true);
                    }}
                    id="image"
                    style={{
                      backgroundImage: `url(${product?.images[0] || ""})`,
                      height: 100,
                      width: 60,
                      backgroundPosition: "left",
                      padding: 0,
                    }}
                  ></div>
                  <div style={{ alignSelf: "center" }}>
                    <h3
                      style={{ cursor: "default" }}
                      onClick={() => {
                        setCurrentProduct(product);
                        setIsProductModalVisible(true);
                      }}
                    >
                      {product.name}
                    </h3>
                    <h4>Quantity - {quantity}</h4>
                  </div>
                  <h3 style={{ alignSelf: "center" }}>
                    ₹{product.discountedPrice}
                  </h3>
                  <h4 style={{ alignSelf: "center" }}>
                    {calcDeliveryDate(order)}
                  </h4>
                </div>
              ))}
            </Panel>
          ))}
        </Collapse>
      </div>

      <Modal
        centered
        visible={isSuccessModalVisible}
        onOk={hideSuccessModal}
        onCancel={hideSuccessModal}
        footer={null}
      >
        <div style={{ textAlign: "center", paddingTop: 24 }}>
          <CheckCircleTwoTone
            twoToneColor="#52c41a"
            style={{ fontSize: 100, textAlign: "center" }}
          />
          <h3 style={{ marginTop: 20 }}>Order Placed Successfully</h3>
        </div>
      </Modal>

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
  fetchOrders: OrdersRedux.actions.fetchOrdersRequest,
  resetOrders: OrdersRedux.actions.resetOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
