import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import "../styles/home.css";
import "antd/dist/antd.css";
import TopHeader from "../components/header";
import Body from "../components/home/body";
import ImageCarousel from "../components/home/imageCarousel";
import Loader from "../components/loader";

function Products() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw", background: "red" }}>
      <Loader isLoading={isLoading} />
    </div>
  );
}

export default Products;
