import React, { useState } from "react";
import { errorMsgState } from "../recoil/atoms";
import { Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import API from "../services/api";

function Quantity({ quantity, stockCount, updateCart, productId }) {
  const [value, setValue] = useState(quantity || 1);
  const [errMsg, setErrMsg] = useState(errorMsgState);
  const [incLoading, setIncLoading] = useState(false);
  const [decLoading, setDecLoading] = useState(false);

  const increment = async () => {
    setIncLoading(true);
    const updated = stockCount > 0 ? value + 1 : false;
    if (updated) {
      await API.addToCart({ productId, quantity: 1 });
      await updateCart();
      setValue(updated);
    } else {
      setErrMsg("Out of stock");
      setTimeout(() => setErrMsg(null), 2000);
    }
    setIncLoading(false);
  };

  const decrement = async () => {
    setDecLoading(true);
    const updated = value > 1 ? value - 1 : false;
    if (updated) {
      await API.removeFromCart({ productId, quantity: 1 });
      await updateCart();
      setValue(updated);
    } else {
      setErrMsg("Out of stock");
      setTimeout(() => setErrMsg(null), 2000);
    }
    setDecLoading(false);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <Button
        type="primary"
        icon={<MinusOutlined />}
        size="small"
        loading={decLoading}
        onClick={decrement}
      />
      <div style={{ textAlign: "center", padding: 2 }}>{value}</div>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        size="small"
        loading={incLoading}
        onClick={increment}
      />
    </div>
  );
}

export default Quantity;
