import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class Api {
  public http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: "http://localhost:8000",
      // timeout: 8000,
      // withCredentials: true,
    });

    this.http.interceptors.response.use((config: any) => {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
      return config;
    });
  }
}

export default new Api();
