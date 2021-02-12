const storeInitialState = {
  isLoggedin: true,
  errorMsg: null,
  user: { data: null, loading: true, error: null },
  products: { data: [], loading: true, error: null },
  cart: { data: [], loading: true, error: null },
  orders: { data: [], loading: true, error: null },
  categories: { data: [], loading: true, error: null },
};

export default storeInitialState;
