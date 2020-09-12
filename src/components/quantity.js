import React, { useState } from "react";
import "../styles/quantity.css";

function Quantity({ quantity, stockCount }) {
  const [value, setValue] = useState(quantity || 1);

  const increment = () => {
    setValue(value < stockCount ? value + 1 : value);
  };

  const decrement = () => {
    setValue(value > 1 ? value - 1 : value);
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
