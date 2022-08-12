import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
});

export const endPoints = {
  REGISTER: "auth/signup",
  LOGIN: "auth/login",
  BUYER_REQUEST: "buyer-requests",
};

export default axiosInstance;
