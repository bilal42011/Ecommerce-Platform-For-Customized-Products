import axios from "axios";
import store from "./Store/Store";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
});

export const getAuthHeader = () => {
  const token = store.getState().auth.user.token;
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const endPoints = {
  REGISTER: "auth/signup",
  LOGIN: "auth/login",
  BUYER_REQUEST: "/buyer-requests",
  CUSTOM_REQUESTS_HISTORY: "/user/buyer-requests",
};

export default axiosInstance;
