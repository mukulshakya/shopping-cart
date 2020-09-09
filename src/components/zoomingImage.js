import React from "react";
import "../styles/zoomingImage.css";

function ZoomingImage() {
  return (
    <div id="image-wrapper">
      <img
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        alt="Category"
      />
      <div style={{ position: "relative" }} id="category-wrapper">
        <span id="category">category</span>
      </div>
    </div>
  );
}

export default ZoomingImage;
