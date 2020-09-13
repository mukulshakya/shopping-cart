import React, { useState } from "react";
import { errorMsgState } from "../recoil/atoms";
import "../styles/quantity.css";
import API from "../services/api";

function Quantity({ quantity, stockCount, updateCart, productId }) {
  const [value, setValue] = useState(quantity || 1);
  const [errMsg, setErrMsg] = useState(errorMsgState);

  const increment = async () => {
    const updated = value < stockCount ? value + 1 : false;
    if (updated) {
      setValue(updated);
      await API.addToCart({ productId, quantity: 1 });
      await updateCart();
    } else {
      setErrMsg("Out of stock");
      setTimeout(() => setErrMsg(null), 2000);
    }
  };

  const decrement = async () => {
    console.log(value);
    const updated = value > 0 ? value - 1 : false;
    if (updated) {
      setValue(updated);
      await API.removeFromCart({ productId, quantity: 1 });
      await updateCart();
    } else setErrMsg("Out of stock");
  };

  return (
    <div className="quantity-input">
      <button
        className="quantity-input__modifier quantity-input__modifier--left"
        onClick={decrement}
      >
        &mdash;
      </button>
      <input
        className="quantity-input__screen"
        type="text"
        value={value}
        readonly
        style={{ pointerEvents: "none" }}
      />
      <button
        className="quantity-input__modifier quantity-input__modifier--right"
        onClick={increment}
      >
        &#xff0b;
      </button>
    </div>
  );
}

export default Quantity;
