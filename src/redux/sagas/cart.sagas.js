import { call, takeLatest, put } from "redux-saga/effects";
import CartRedux from "../reducers/cart.reducer";
import { parseError } from "../../services/utils";
import API from "../../services/api";

export function* watchCartRequests() {
  yield takeLatest(CartRedux.actions.fetchCartRequest, fetchCart);
  yield takeLatest(CartRedux.actions.addToCartRequest, fetchCart);
}

export function* fetchCart() {
  try {
    const response = yield call(API.getCart);
    yield put(CartRedux.actions.fetchCartSuccess(response.data.data));
  } catch (error) {
    yield put(CartRedux.actions.fetchCartFailure(parseError(error)));
  }
}


export function* addToCart(action) {
  try {
    const response = yield call(API.addToCart, action.payload);
    yield put(CartRedux.actions.fetchCartSuccess(response.data.data));
  } catch (error) {
    yield put(CartRedux.actions.fetchCartFailure(parseError(error)));
  }
}