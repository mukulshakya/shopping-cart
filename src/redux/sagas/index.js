import { all } from "redux-saga/effects";
import { watchProductsRequests } from "./products.sagas";
import { watchCategoriesRequests } from "./categories.sagas";
import { watchUserRequests } from "./user.sagas";
import { watchCartRequests } from "./cart.sagas";

export default function* rootSaga() {
  yield all([
    watchCategoriesRequests(),
    watchUserRequests(),
    watchCartRequests(),
    watchProductsRequests(),
  ]);
}
