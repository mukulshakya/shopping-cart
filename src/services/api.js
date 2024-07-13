import axios from "axios";

const url = {
  LIVE: "https://shopping-cart-server-production-6923.up.railway.app/v1",
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

func.categories = () => api.get("/categories");

func.products = (params) => api.get("/products", { params });

func.getCart = () => api.get("/cart");
func.addToCart = (payload) => api.post("/cart", payload);
func.removeFromCart = (payload) => api.put("/cart", payload);

func.register = (payload) => api.post("/register", payload);
func.login = async (payload) => api.post("/login", payload);
func.profile = () => api.get("/profile");

func.getMyOrders = () => api.get("/order");
func.placeOrder = (payload) => api.post("/order", payload);

export default func;
