import { createSlice } from "@reduxjs/toolkit";
import storeInitialState from "../store/initialState";

export const INITIAL_STATE = storeInitialState;

export const setErrorMsg = (state, action) => {
  state.errorMsg = action.payload;
};

export const resetErrorMsg = (state) => {
  state.errorMsg = null;
};

export default createSlice({
  name: "errorMsg",
  initialState: INITIAL_STATE,
  reducers: {
    setErrorMsg,
    resetErrorMsg,
  },
});
