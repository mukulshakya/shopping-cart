import { createSlice } from "@reduxjs/toolkit";
import storeInitialState from "../store/initialState";

export const INITIAL_STATE = storeInitialState.cart;

export const fetchCartFailure = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const fetchCartRequest = (state) => {
  state.loading = true;
};

export const fetchCartSuccess = (state, action) => {
  state.data = action.payload;
  state.loading = false;
};

export const resetCart = (state) => {
  state.data = [];
  state.error = null;
};

export const addToCartFailure = (state) => {
  state.loading = false;
};

export const addToCartRequest = (state) => {
  state.loading = true;
};

export default createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    fetchCartFailure,
    fetchCartRequest,
    fetchCartSuccess,
    resetCart,
    addToCartFailure,
    addToCartRequest
  },
});
