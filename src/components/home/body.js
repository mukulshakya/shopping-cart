import React from "react";
import "antd/dist/antd.css";
import ZoomingImage from "../zoomingImage";
import "../../styles/body.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
