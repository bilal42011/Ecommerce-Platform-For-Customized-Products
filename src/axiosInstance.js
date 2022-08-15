import axios from "axios";
import store from "./Store/Store";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
});

export const getToken = () => {
  const token = store.getState().auth.user.token;
  return token;
};

export const endPoints = {
  REGISTER: "auth/signup",
  LOGIN: "auth/login",
  BUYER_REQUEST: "/buyer-requests",
  CUSTOM_REQUESTS_HISTORY: "/user/buyer-requests",
  UPGRADE_ACCOUNT: "/user/upgrade",
};

export default axiosInstance;
