import { createSlice } from "@reduxjs/toolkit";
import storeInitialState from "../store/initialState";

export const INITIAL_STATE = storeInitialState.error;

export const setErrorMsg = (state, action) => {
  console.log({ state, action });
  state.message = action.payload;
};

export const resetErrorMsg = (state) => {
  state.message = null;
};

export default createSlice({
  name: "error",
  initialState: INITIAL_STATE,
  reducers: {
    setErrorMsg,
    resetErrorMsg,
  },
});
