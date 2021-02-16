import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import "./styles";
import Home from "./pages/home";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Orders from "./pages/orders";
import ErrorMsgRedux from "./redux/reducers/errorMsg.reducer";

function NoMatch() {
  const location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function App({ errorMsg, resetErrorMsg }) {
  useEffect(() => {
    errorMsg && setTimeout(resetErrorMsg, 2000);
  }, [errorMsg, resetErrorMsg]);

  return (
    <Router basename="/shopping-cart">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return { errorMsg: state.error.message };
};
const mapDispatchToProps = {
  resetErrorMsg: ErrorMsgRedux.actions.resetErrorMsg,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
