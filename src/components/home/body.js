import React from "react";
import "antd/dist/antd.css";
import ZoomingImage from "../zoomingImage";
import "../../styles/body.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Body() {
  return (
    <div id="images-wrapper">
      {Array(4)
        .fill("")
        .map(() => (
          <Link to="/products">
            <ZoomingImage />
          </Link>
        ))}
    </div>
  );
}

export default Body;
