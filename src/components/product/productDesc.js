import React from "react";

function ProductDesc({ product }) {
  return (
    <div>
      <h3 style={{ cursor: "default" }}>{product.name}</h3>
      <div>
        <span style={{ fontWeight: "bold" }}>
          ₹{product.discountedPrice}
          {"  "}
        </span>
        {product.discountedPrice !== product.actualPrice && (
          <span>
            <span
              style={{
                fontSize: 11,
                color: "gray",
                textDecoration: "line-through",
                display: "inline-block",
                margin: "0 5px",
              }}
            >
              ₹{product.actualPrice}
            </span>
            <span
              style={{
                fontSize: 10,
                color: "green",
                fontWeight: "bold",
                display: "inline-block",
                marginRight: 10,
              }}
            >
              {Math.round(
                ((product.actualPrice - product.discountedPrice) /
                  product.actualPrice) *
                  100
              )}
              % OFF
            </span>
          </span>
        )}
        <span>({product.stockCount} Left)</span>
      </div>
    </div>
  );
}

export default ProductDesc;
