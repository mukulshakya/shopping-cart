import React from "react";
import { Link } from "react-router-dom";
import ZoomingImage from "../zoomingImage";

function Body({ categories }) {
  return (
    <div id="images-wrapper">
      {categories.map((category) => (
        <Link to={`/products/${category._id}`} key={category._id}>
          <ZoomingImage data={category} key={category._id} />
        </Link>
      ))}
    </div>
  );
}

export default Body;
