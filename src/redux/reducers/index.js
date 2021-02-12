import { combineReducers } from "@reduxjs/toolkit";
import ProductsRedux from "./products.reducer";
import CategoriesRedux from "./categories.reducer";
import UserRedux from "./user.reducer";
import CartRedux from "./cart.reducer";
import ErrorMsgRedux from "./errorMsg.reducer";

const rootReducer = combineReducers({
  products: ProductsRedux.reducer,
  categories: CategoriesRedux.reducer,
  user: UserRedux.reducer,
  cart: CartRedux.reducer,
  errorMsg: ErrorMsgRedux.reducer,
});

export default rootReducer;
