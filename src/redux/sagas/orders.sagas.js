import { call, takeLatest, put, all } from "redux-saga/effects";
import OrdersRedux from "../reducers/orders.reducer";
import CartRedux from "../reducers/cart.reducer";
import ErrorMsgRedux from "../reducers/errorMsg.reducer";
import { parseError } from "../../services/utils";
import API from "../../services/api";

export function* watchOrdersRequests() {
  yield takeLatest(OrdersRedux.actions.fetchOrdersRequest, fetchOrders);
  yield takeLatest(OrdersRedux.actions.placeOrderRequest, placeOrder);
}

export function* fetchOrders() {
  try {
    const response = yield call(API.getMyOrders);
    yield all([
      put(OrdersRedux.actions.fetchOrdersSuccess(response.data.data)),
      put(CartRedux.actions.fetchCartRequest()),
    ]);
  } catch (error) {
    const errorMsg = parseError(error);
    yield all([
      put(OrdersRedux.actions.fetchOrdersFailure(errorMsg)),
      put(ErrorMsgRedux.actions.setErrorMsg(errorMsg)),
    ]);
  }
}

export function* placeOrder(action) {
  console.log({ order: action.payload });
  const { resolve, reject, payload } = action.payload;
  try {
    const response = yield call(API.placeOrder, payload);
    resolve();
    yield all([
      put(OrdersRedux.actions.placeOrderSuccess(response.data.data)),
      put(CartRedux.actions.fetchCartRequest()),
    ]);
  } catch (error) {
    reject();
    const errorMsg = parseError(error);
    yield all([
      put(OrdersRedux.actions.placeOrderFailure(errorMsg)),
      put(ErrorMsgRedux.actions.setErrorMsg(errorMsg)),
    ]);
  }
}
