import { atom } from "recoil";

export const currentUserState = atom({
  key: "currentUserState",
  default: null,
});

export const errorMsgState = atom({
  key: "errorMsgState",
  default: null,
});

export const categoryListState = atom({
  key: "categoryListState",
  default: [],
});

export const productListState = atom({
  key: "productListState",
  default: [],
});

export const cartListState = atom({
  key: "cartListState",
  default: [],
});

export const orderListState = atom({
  key: "orderListState",
  default: [],
});
