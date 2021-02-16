import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { connect, useSelector } from "react-redux";
import CartRedux from "../redux/reducers/cart.reducer";
import ErrorMsgRedux from "../redux/reducers/errorMsg.reducer";

function Quantity({
  quantity,
  stockCount,
  productId,
  setErrorMsg,
  addToCart,
  removeFromCart,
}) {
  const [value, setValue] = useState(quantity || 1);
  const [incLoading, setIncLoading] = useState(false);
  const [decLoading, setDecLoading] = useState(false);
  const [currentType, setCurrentType] = useState(null);

  const {
    cart: { loading: isLoading },
  } = useSelector((state) => state);

  const increment = async () => {
    setCurrentType("inc");
    const updated = stockCount > 0 ? value + 1 : false;
    if (updated) addToCart({ productId, quantity: 1 });
    else setErrorMsg("Out of stock");
  };

  const decrement = async () => {
    setCurrentType("dec");
    const updated = value > 1 ? value - 1 : false;
    if (updated) removeFromCart({ productId, quantity: 1 });
    else setErrorMsg("Out of stock");
  };

  useEffect(() => {
    setValue(quantity);
  }, [quantity]);

  useEffect(() => {
    if (currentType === "inc") setIncLoading(isLoading);
    else if (currentType === "dec") setDecLoading(isLoading);
  }, [isLoading, currentType]);

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

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  addToCart: CartRedux.actions.addToCartRequest,
  removeFromCart: CartRedux.actions.removeFromCartRequest,
  setErrorMsg: ErrorMsgRedux.actions.setErrorMsg,
};

export default connect(mapStateToProps, mapDispatchToProps)(Quantity);
