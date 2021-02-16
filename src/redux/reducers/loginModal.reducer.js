import { createSlice } from "@reduxjs/toolkit";
import storeInitialState from "../store/initialState";

export const INITIAL_STATE = storeInitialState.loginModal;

export const setLoginModalVisible = (state) => {
  state.isVisible = !state.isVisible;
};

export default createSlice({
  name: "loginModal",
  initialState: INITIAL_STATE,
  reducers: { setLoginModalVisible },
});
