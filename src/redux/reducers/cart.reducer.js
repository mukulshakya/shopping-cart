import { createSlice } from "@reduxjs/toolkit";
import storeInitialState from "../store/initialState";

export const INITIAL_STATE = storeInitialState.cart;

export const fetchCartRequest = (state) => {
  state.loading = true;
};

export const fetchCartFailure = (state, action) => {
  state.loading = false;
};

export const fetchCartSuccess = (state, action) => {
  state.data = action.payload;
  state.loading = false;
};

export const addToCartRequest = (state) => {
  state.loading = true;
};

export const addToCartFailure = (state) => {
  state.loading = false;
};

export const addToCartSuccess = (state, action) => {
  state.loading = false;
};

export const removeFromCartRequest = (state) => {
  state.loading = true;
};

export const removeFromCartFailure = (state) => {
  state.loading = false;
};

export const removeFromCartSuccess = (state) => {
  state.loading = false;
};

export const updateCartRequest = (state) => {
  state.loading = true;
};

export const updateCartFailure = (state, action) => {
  state.loading = false;
};

export const updateCartSuccess = (state, action) => {
  state.loading = false;
};

export const resetCart = (state) => {
  state.data = [];
};

export default createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    fetchCartRequest,
    fetchCartFailure,
    fetchCartSuccess,
    addToCartRequest,
    addToCartFailure,
    addToCartSuccess,
    removeFromCartRequest,
    removeFromCartFailure,
    removeFromCartSuccess,
    updateCartRequest,
    updateCartFailure,
    updateCartSuccess,
    resetCart,
  },
});
