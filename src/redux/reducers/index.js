import { combineReducers } from "@reduxjs/toolkit";
import ProductsRedux from "./products.reducer";
import CategoriesRedux from "./categories.reducer";
import UserRedux from "./user.reducer";
import CartRedux from "./cart.reducer";
import ErrorMsgRedux from "./errorMsg.reducer";
import LoginModalRedux from "./loginModal.reducer";
import OrdersRedux from "./orders.reducer";

const rootReducer = combineReducers({
  products: ProductsRedux.reducer,
  categories: CategoriesRedux.reducer,
  user: UserRedux.reducer,
  cart: CartRedux.reducer,
  error: ErrorMsgRedux.reducer,
  loginModal: LoginModalRedux.reducer,
  orders: OrdersRedux.reducer,
});

export default rootReducer;
