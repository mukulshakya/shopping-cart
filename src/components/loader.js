import React, { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";

function Loader({ isLoading }) {
  const [display, setDisplay] = useState("flex");

  useEffect(() => {
    !isLoading && setTimeout(() => setDisplay("None"), 600);
  }, [isLoading]);

  return (
    <div
      id="wrapper"
      style={{
        opacity: isLoading ? 1 : 0,
        display: display,
        position: "absolute",
        zIndex: 999,
        background: "rgba(0,0,0,0.8)",
        transition: "all 500ms",
      }}
    >
      <LoadingOutlined />
    </div>
  );
}

export default Loader;
