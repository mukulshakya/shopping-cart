import { createSlice } from "@reduxjs/toolkit";
import storeInitialState from "../store/initialState";

export const INITIAL_STATE = storeInitialState.orders;

export const fetchOrdersRequest = (state) => {
  state.loading = true;
};

export const fetchOrdersFailure = (state) => {
  state.loading = false;
};

export const fetchOrdersSuccess = (state, action) => {
  state.data = action.payload;
  state.loading = false;
};

export const placeOrderRequest = (state) => {
  state.loading = true;
};

export const placeOrderFailure = (state) => {
  state.loading = false;
};

export const placeOrderSuccess = (state) => {
  state.loading = false;
};

export const resetOrders = (state) => {
  state.data = [];
};

export default createSlice({
  name: "orders",
  initialState: INITIAL_STATE,
  reducers: {
    fetchOrdersRequest,
    fetchOrdersFailure,
    fetchOrdersSuccess,
    placeOrderRequest,
    placeOrderFailure,
    placeOrderSuccess,
    resetOrders
  },
});
