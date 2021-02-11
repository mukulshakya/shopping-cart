import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Home from "./pages/home";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Orders from "./pages/orders";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import { RecoilRoot } from "recoil";

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

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
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
    </React.StrictMode>
  </RecoilRoot>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
