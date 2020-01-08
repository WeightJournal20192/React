import Axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return Axios.create({
    baseURL: "https://weight-lifting1.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;