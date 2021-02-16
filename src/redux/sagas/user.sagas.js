import { call, takeLatest, put, all } from "redux-saga/effects";
import UserRedux from "../reducers/user.reducer";
import ErrorMsgRedux from "../reducers/errorMsg.reducer";
import CartRedux from "../reducers/cart.reducer";
import LoginModalRedux from "../reducers/loginModal.reducer";
import { parseError } from "../../services/utils";
import API from "../../services/api";

export function* watchUserRequests() {
  yield takeLatest(UserRedux.actions.fetchUserRequest, fetchUser);
  yield takeLatest(UserRedux.actions.registerUserRequest, registerUser);
  yield takeLatest(UserRedux.actions.loginUserRequest, loginUser);
}

export function* fetchUser() {
  try {
    const response = yield call(API.profile);
    yield all([
      put(UserRedux.actions.fetchUserSuccess(response.data.data)),
      put(CartRedux.actions.fetchCartRequest()),
    ]);
  } catch (error) {
    const errorMsg = parseError(error);
    yield all([
      put(UserRedux.actions.fetchUserFailure(errorMsg)),
      put(ErrorMsgRedux.actions.setErrorMsg(errorMsg)),
    ]);
  }
}

export function* registerUser(action) {
  try {
    const response = yield call(API.register, action.payload);
    yield all([
      put(UserRedux.actions.registerUserSuccess(response.data.data)),
      put(CartRedux.actions.fetchCartRequest()),
      put(LoginModalRedux.actions.setLoginModalVisible()),
    ]);
  } catch (error) {
    const errorMsg = parseError(error);
    yield all([
      put(UserRedux.actions.registerUserFailure(errorMsg)),
      put(ErrorMsgRedux.actions.setErrorMsg(errorMsg)),
    ]);
  }
}

export function* loginUser(action) {
  try {
    const response = yield call(API.login, action.payload);
    yield all([
      put(UserRedux.actions.loginUserSuccess(response.data.data)),
      put(CartRedux.actions.fetchCartRequest()),
      put(LoginModalRedux.actions.setLoginModalVisible()),
    ]);
  } catch (error) {
    const errorMsg = parseError(error);
    yield all([
      put(UserRedux.actions.loginUserFailure(errorMsg)),
      put(ErrorMsgRedux.actions.setErrorMsg(errorMsg)),
    ]);
  }
}
