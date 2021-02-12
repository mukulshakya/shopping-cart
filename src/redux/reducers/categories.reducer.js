import { createSlice } from "@reduxjs/toolkit";
import storeInitialState from "../store/initialState";

export const INITIAL_STATE = storeInitialState.categories;

export const fetchCategoriesFailure = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const fetchCategoriesRequest = (state) => {
  state.loading = true;
};

export const fetchCategoriesSuccess = (state, action) => {
  state.data = action.payload;
  state.loading = false;
};

export const resetCategories = (state) => {
  state.data = [];
  state.error = null;
};

export default createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    fetchCategoriesFailure,
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
    resetCategories,
  },
});
