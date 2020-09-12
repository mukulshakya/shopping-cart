import React from "react";
import ProductDesc from "../product/productDesc";
import Quantity from "../quantity";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

function CartItem({ product }) {
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  const productDummy = {
    actualPrice: 222999,
    category: {
      _id: "5f5c5cd36593643cb5d872ff",
      name: "Appliances",
      image: "https://i.imgur.com/LXcsMb7.jpg",
    },
    createdAt: "2020-09-12T05:29:55.932Z",
    description:
      "Samsung The Frame 163cm (65 inch) Ultra HD (4K) QLED Smart TV (QA65LS03TAKXXL)",
    discountedPrice: 149999,
    features: (5)[
      ("Supported Apps: Netflix|Prime Video|Apple TV|Disney+Hotstar|Youtube",
      "Operating System: Tizen",
      "Resolution: Ultra HD (4K) 3840 x 2160 Pixels",
      "Sound Output: 40 W",
      "Refresh Rate: 120 Hz")
    ],
    images: (5)[
      ("https://i.imgur.com/AzW1VNK.jpg",
      "https://i.imgur.com/vM0fRzx.jpg",
      "https://i.imgur.com/AzW1VNK.jpg",
      "https://i.imgur.com/vM0fRzx.jpg",
      "https://i.imgur.com/AzW1VNK.jpg")
    ],
    name: "SAMSUNG 65 inch 4k TV",
    sizes: [],
    stockCount: 39,
    updatedAt: "2020-09-12T05:29:55.932Z",
    views: 0,
    _id: "5f5c5cd36593643cb5d873",
  };

  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "space-between",
        padding: 10,
        borderBottom: "1px solid #ccc",
      }}
    >
      <div>
        <div
          id="image"
          style={{
            backgroundImage: `url(${"https://i.imgur.com/i0dlUDT.jpg"})`,
            height: 70,
            width: 40,
            backgroundPosition: "left",
            padding: 0,
            // paddingLeft: 10
          }}
        ></div>
        <div>
          <Quantity />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <ProductDesc product={productDummy} />
        </div>
        <div style={{ fontSize: 11 }}>
          <span>Delivery by {deliveryDate.toDateString()}</span>
        </div>
        <div>
          <Button
            shape="circle"
            icon={<CloseOutlined />}
            size="small"
            loading={false}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
