import { call, takeLatest, put, all } from "redux-saga/effects";
import CartRedux from "../reducers/cart.reducer";
import ErrorMsgRedux from "../reducers/errorMsg.reducer";
import { parseError } from "../../services/utils";
import API from "../../services/api";

export function* watchCartRequests() {
  yield takeLatest(CartRedux.actions.fetchCartRequest, fetchCart);
  yield takeLatest(CartRedux.actions.addToCartRequest, addToCart);
  yield takeLatest(CartRedux.actions.removeFromCartRequest, removeFromCart);
}

export function* fetchCart() {
  try {
    const response = yield call(API.getCart);
    yield put(CartRedux.actions.fetchCartSuccess(response.data.data));
  } catch (error) {
    const errorMsg = parseError(error);
    yield all([
      put(CartRedux.actions.fetchCartFailure(errorMsg)),
      put(ErrorMsgRedux.actions.setErrorMsg(errorMsg)),
    ]);
  }
}

export function* addToCart(action) {
  try {
    const response = yield call(API.addToCart, action.payload);
    yield all([
      put(CartRedux.actions.addToCartSuccess(response.data.data)),
      put(CartRedux.actions.fetchCartRequest()),
    ]);
  } catch (error) {
    const errorMsg = parseError(error);
    yield all([
      put(CartRedux.actions.addToCartFailure(errorMsg)),
      put(ErrorMsgRedux.actions.setErrorMsg(errorMsg)),
    ]);
  }
}

export function* removeFromCart(action) {
  try {
    const response = yield call(API.removeFromCart, action.payload);
    yield all([
      put(CartRedux.actions.removeFromCartSuccess(response.data.data)),
      put(CartRedux.actions.fetchCartRequest()),
    ]);
  } catch (error) {
    const errorMsg = parseError(error);
    yield all([
      put(CartRedux.actions.removeFromCartFailure(errorMsg)),
      put(ErrorMsgRedux.actions.setErrorMsg(errorMsg)),
    ]);
  }
}
