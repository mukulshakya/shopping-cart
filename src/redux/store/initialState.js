const storeInitialState = {
  loginModal: { isVisible: false },
  error: { message: null },
  user: { data: null, loading: false },
  products: { data: [], loading: true },
  cart: { data: [], loading: false },
  orders: { data: [], loading: true },
  categories: { data: [], loading: true },
};

export default storeInitialState;
