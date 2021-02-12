import { call, takeLatest, put } from "redux-saga/effects";
import ProductsRedux from "../reducers/products.reducer";
import { parseError } from "../../services/utils";
import API from "../../services/api";

export function* watchProductsRequests() {
  yield takeLatest(ProductsRedux.actions.fetchProductsRequest, fetchProducts);
}

export function* fetchProducts(action) {
  try {
    const response = yield call(API.products, action.payload);
    yield put(ProductsRedux.actions.fetchProductsSuccess(response.data.data));
  } catch (error) {
    yield put(ProductsRedux.actions.fetchProductsFailure(parseError(error)));
  }
}
