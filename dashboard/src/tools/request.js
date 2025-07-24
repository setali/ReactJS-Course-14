import axios from "axios";
import { BASE_URL } from "./constants";
import { getToken } from "./utils";

const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.request.use(
  function (config) {
    const token = getToken();

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//  my_first_value
// myFirstValue

export default request;
