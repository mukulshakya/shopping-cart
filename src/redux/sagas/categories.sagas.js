import { call, takeLatest, put } from "redux-saga/effects";
import CategoriesRedux from "../reducers/categories.reducer";
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
    yield put(CategoriesRedux.actions.fetchCategoriesSuccess(response.data.data));
  } catch (error) {
    yield put(
      CategoriesRedux.actions.fetchCategoriesFailure(parseError(error))
    );
  }
}
