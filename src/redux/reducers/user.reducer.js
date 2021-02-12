import { createSlice } from "@reduxjs/toolkit";
import storeInitialState from "../store/initialState";

export const INITIAL_STATE = storeInitialState.user;

export const fetchUserFailure = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const fetchUserRequest = (state) => {
  state.loading = true;
};

export const fetchUserSuccess = (state, action) => {
  state.data = action.payload;
  state.loading = false;
};

export const resetUser = (state) => {
  state.data = null;
  state.error = null;
};

export default createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    fetchUserFailure,
    fetchUserRequest,
    fetchUserSuccess,
    resetUser,
  },
});
