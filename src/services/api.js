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
    console.log("register", { payload });
    const res = await api.post("/register", payload);
    console.log({ res });
    return res;
  } catch (error) {
    return parseError(error);
  }
};

func.login = async (payload) => {
  try {
    console.log("login", { payload });
    const res = await api.post("/login", payload);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return parseError(error);
  }
};

func.profile = async () => {
  try {
    const res = await api.get("/profile");
    return res.data;
  } catch (error) {
    return parseError(error);
  }
};

func.products = async (params) => {
  try {
    const res = await api.get("/products", { params });
    return res.data;
  } catch (error) {
    return parseError(error);
  }
};

func.categories = async () => {
  try {
    const res = await api.get("/categories");
    return res.data;
  } catch (error) {
    return parseError(error);
  }
};

func.addToCart = async (payload) => {
  try {
    payload.quantity = payload.quantity || 1;
    const res = await api.post("/cart", payload);
    return res.data;
  } catch (error) {
    return parseError(error);
  }
};

func.removeFromCart = async (payload) => {
  try {
    console.log(payload);
    payload.quantity = payload.quantity || 1;
    const res = await api.put("/cart", payload);
    return res.data;
  } catch (error) {
    return parseError(error);
  }
};

func.getCart = async () => {
  try {
    const res = await api.get("/cart");
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

export default func;
