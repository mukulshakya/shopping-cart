import { createSlice } from "@reduxjs/toolkit";
import storeInitialState from "../store/initialState";

export const INITIAL_STATE = storeInitialState.products;

export const fetchProductsRequest = (state) => {
  state.loading = true;
};

export const fetchProductsFailure = (state) => {
  state.loading = false;
};

export const fetchProductsSuccess = (state, action) => {
  state.data = action.payload;
  state.loading = false;
};

export const resetProducts = (state) => {
  state.data = [];
};

export default createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    fetchProductsRequest,
    fetchProductsFailure,
    fetchProductsSuccess,
    resetProducts,
  },
});
