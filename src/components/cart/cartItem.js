import React from "react";
import ProductDesc from "../product/productDesc";
import Quantity from "../quantity";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import API from "../../services/api";

function CartItem({ item, updateCart }) {
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  const removeFromCart = async () => {
    const response = await API.removeFromCart({
      productId: item.productId,
      quantity: item.quantity,
    });
    response.status && updateCart();
  };

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
            updateCart={updateCart}
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
        <div>
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
            loading={false}
            onClick={removeFromCart}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
