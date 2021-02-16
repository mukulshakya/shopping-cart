import { createSlice } from "@reduxjs/toolkit";
import storeInitialState from "../store/initialState";

export const INITIAL_STATE = storeInitialState.categories;

export const fetchCategoriesRequest = (state) => {
  state.loading = true;
};

export const fetchCategoriesFailure = (state, action) => {
  state.loading = false;
};

export const fetchCategoriesSuccess = (state, action) => {
  state.data = action.payload;
  state.loading = false;
};

export const resetCategories = (state) => {
  state.data = [];
};

export default createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    fetchCategoriesRequest,
    fetchCategoriesFailure,
    fetchCategoriesSuccess,
    resetCategories,
  },
});
