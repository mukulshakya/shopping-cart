import { call, takeLatest, put, all } from "redux-saga/effects";
import CategoriesRedux from "../reducers/categories.reducer";
import ErrorMsgRedux from "../reducers/errorMsg.reducer";
import { parseError } from "../../services/utils";
import API from "../../services/api";

export function* watchCategoriesRequests() {
  yield takeLatest(
    CategoriesRedux.actions.fetchCategoriesRequest,
    fetchCategories
  );
}

export function* fetchCategories() {
  try {
    const response = yield call(API.categories);
    yield put(
      CategoriesRedux.actions.fetchCategoriesSuccess(response.data.data)
    );
  } catch (error) {
    const errorMsg = parseError(error);
    yield all([
      put(CategoriesRedux.actions.fetchCategoriesFailure(errorMsg)),
      put(ErrorMsgRedux.actions.setErrorMsg(errorMsg)),
    ]);
  }
}
