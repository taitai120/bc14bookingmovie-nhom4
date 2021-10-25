import axios from "axios";

const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE4LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NzU2MTYwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjQ3NzA5MjAwfQ.Gn_duD0LZ6aamu893NNv17QlXn6HTFtyfWIFAIMBjEM";

const api = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/",
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    config.headers = {
      ...config.headers,
      TokenCybersoft: TOKEN_CYBERSOFT,
      //   Authorization: localStorage.getItem("UserAdmin")
      //     ? "Bearer " + JSON.parse(localStorage.getItem("UserAdmin")).accessToken
      //     : "",

      Authorization: localStorage.getItem("UserCustomer")
        ? "Bearer " +
          JSON.parse(localStorage.getItem("UserCustomer")).accessToken
        : "",
    };

    return config;
  },
  (errors) => {
    // Do something with request error
    return Promise.reject(errors);
  }
);

export default api;
