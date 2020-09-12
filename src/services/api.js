import axios from "axios";
// import constants from "../constants";

const api = axios.create({ baseURL: "http://localhost:4040/v1" });

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
    // console.log({ payload });
    const res = await api.post("/register", payload);
    console.log({ res });
    return res;
  } catch (error) {
    return parseError(error);
  }
};

func.login = async (payload) => {
  try {
    console.log({ payload });
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

export default func;
