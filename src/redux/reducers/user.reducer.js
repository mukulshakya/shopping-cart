import { createSlice } from "@reduxjs/toolkit";
import storeInitialState from "../store/initialState";

export const INITIAL_STATE = storeInitialState.user;

export const fetchUserRequest = (state) => {
  state.loading = true;
};

export const fetchUserFailure = (state, action) => {
  state.loading = false;
};

export const fetchUserSuccess = (state, action) => {
  state.data = action.payload;
  state.loading = false;
};

export const registerUserRequest = (state, action) => {
  state.loading = true;
};

export const registerUserFailure = (state, action) => {
  state.loading = false;
};

export const registerUserSuccess = (state, action) => {
  localStorage.setItem("token", action.payload.token);
  state.data = action.payload.user;
  state.loading = false;
};

export const loginUserRequest = (state, action) => {
  state.loading = true;
};

export const loginUserFailure = (state, action) => {
  state.loading = false;
};

export const loginUserSuccess = (state, action) => {
  localStorage.setItem("token", action.payload.token);
  state.data = action.payload.user;
  state.loading = false;
};

export const resetUser = (state) => {
  state.data = null;
};

export default createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    fetchUserRequest,
    fetchUserFailure,
    fetchUserSuccess,
    registerUserRequest,
    registerUserFailure,
    registerUserSuccess,
    loginUserRequest,
    loginUserFailure,
    loginUserSuccess,
    resetUser,
  },
});
