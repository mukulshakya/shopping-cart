import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { connect, useSelector } from "react-redux";
import ProductDesc from "../product/productDesc";
import Quantity from "../quantity";
import CartRedux from "../../redux/reducers/cart.reducer";

function CartItem({
  item,
  setCurrentProduct,
  setIsProductModalVisible,
  removeFromCart,
}) {
  const [removeFromCartLoading, setRemoveFromCartLoading] = useState(false);

  const isLoading = useSelector((state) => state.cart.loading);

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  useEffect(() => {
    removeFromCartLoading &&
      removeFromCartLoading !== isLoading &&
      setRemoveFromCartLoading(isLoading);
  }, [isLoading]);

  return (
    <div
      style={{
        display: "flex",
        padding: 10,
        borderBottom: "1px solid #ccc",
      }}
    >
      <div>
        <div
          onClick={() => {
            setCurrentProduct(item.product);
            setIsProductModalVisible(true);
          }}
          id="image"
          style={{
            backgroundImage: `url(${
              item.product.images ? item.product.images[0] : ""
            })`,
            height: 70,
            width: 40,
            backgroundPosition: "left",
            padding: 0,
          }}
        ></div>
        <div>
          <Quantity
            quantity={item.quantity}
            stockCount={item.product.stockCount}
            productId={item.productId}
          />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "65% 30% 5%",
          width: "100%",
        }}
      >
        <div
          onClick={() => {
            setCurrentProduct(item.product);
            setIsProductModalVisible(true);
          }}
        >
          <ProductDesc product={item.product} />
        </div>
        <div style={{ fontSize: 11 }}>
          <span>Delivery by {deliveryDate.toDateString()}</span>
        </div>
        <div>
          <Button
            shape="circle"
            icon={<CloseOutlined />}
            size="small"
            loading={removeFromCartLoading}
            onClick={() => {
              setRemoveFromCartLoading(true);
              removeFromCart({
                productId: item.productId,
                quantity: item.quantity,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  removeFromCart: CartRedux.actions.removeFromCartRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
