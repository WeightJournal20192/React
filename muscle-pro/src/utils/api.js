import axios from "axios";

// URL shared by every endpoint
axios.defaults.baseURL = "https://weight-lifting1.herokuapp.com/api/";

axios.api.request.use(config => {
  // Add a token to every outgoing request
  const token = localStorage.getItem("token");
  config.headers.authorization = token;
  return config;
});

axios.api.response.use(res => {
  // Strip the token off of any incoming response (if it exists) and
  // Add it to storage
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res;
});