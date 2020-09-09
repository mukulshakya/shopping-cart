import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import "../styles/home.css";
import "antd/dist/antd.css";
import TopHeader from "../components/header";
import Body from "../components/home/body";
import ImageCarousel from "../components/home/imageCarousel";
import Loader from "../components/loader";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <div>
      <Loader isLoading={isLoading} />
      <TopHeader />
      <div id="body">
        <Body />
      </div>
    </div>
  );
}

export default Home;
