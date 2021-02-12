import axios from "axios";

const url = {
  LIVE: "https://heeko-ecommerce-api.herokuapp.com/v1",
  LOCAL: "http://localhost:4040/v1",
};
// process.env.NODE_ENV === "production" ? URL.LIVE : URL.LOCAL
const api = axios.create({
  baseURL: url.LIVE,
});

api.interceptors.request.use(
  async function (config) {
    const token = localStorage.getItem("token");
    if (token) return { ...config, headers: { Authorization: token } };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

const func = {};

const parseError = (error) =>
  error.response?.data || {
    status: false,
    message: "Unexpected error",
    errors: [],
  };

func.register = async (payload) => {
  try {
    const res = await api.post("/register", payload);
    return res;
  } catch (error) {
    return parseError(error);
  }
};

func.login = async (payload) => {
  try {
    const res = await api.post("/login", payload);
    return res.data;
  } catch (error) {
    return parseError(error);
  }
};

func.profile = () => api.get("/profile");
func.categories = () => api.get("/categories");
func.getCart = () => api.get("/cart");
func.products = (params) => api.get("/products", { params });
func.addToCart = (payload) =>
  api.post("/cart", { ...payload, quantity: payload.quantity || 1 });


func.removeFromCart = async (payload) => {
  try {
    payload.quantity = payload.quantity || 1;
    const res = await api.put("/cart", payload);
    return res.data;
  } catch (error) {
    return parseError(error);
  }
};

func.placeOrder = async (payload) => {
  try {
    const res = await api.post("/order", payload);
    return res.data;
  } catch (error) {
    return parseError(error);
  }
};

func.getMyOrders = async (payload) => {
  try {
    const res = await api.get("/order");
    return res.data;
  } catch (error) {
    return parseError(error);
  }
};

export default func;
