import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MY_VARIABLE,
});

const axiosInstanceToken = axios.create({
  baseURL: import.meta.env.VITE_MY_VARIABLE,
});

axiosInstanceToken.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { axiosInstance, axiosInstanceToken };
