import { call, takeLatest, put } from "redux-saga/effects";
import UserRedux from "../reducers/user.reducer";
import { parseError } from "../../services/utils";
import API from "../../services/api";

export function* watchUserRequests() {
  yield takeLatest(UserRedux.actions.fetchUserRequest, fetchUser);
}

export function* fetchUser() {
  try {
    const response = yield call(API.profile);
    yield put(UserRedux.actions.fetchUserSuccess(response.data.data));
  } catch (error) {
    console.log({ error: parseError(error) });
    yield put(UserRedux.actions.fetchUserFailure(parseError(error)));
  }
}
