import { call, takeLatest, put, all } from "redux-saga/effects";
import ProductsRedux from "../reducers/products.reducer";
import ErrorMsgRedux from "../reducers/errorMsg.reducer";
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
    const errorMsg = parseError(error);
    yield all([
      put(ProductsRedux.actions.fetchProductsFailure(errorMsg)),
      put(ErrorMsgRedux.actions.setErrorMsg(errorMsg)),
    ]);
  }
}
