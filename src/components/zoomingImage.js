import React from "react";

function ZoomingImage({ data }) {
  return (
    <div id="image-wrapper">
      <img src={data.image} alt={data.name || "Category"} />
      <div style={{ position: "relative" }} id="category-wrapper">
        <span id="category">{data.name || "category"}</span>
      </div>
    </div>
  );
}

export default ZoomingImage;
