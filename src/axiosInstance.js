import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
});

export const getToken = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token;
};

export const endPoints = {
  REGISTER: "auth/signup",
  LOGIN: "auth/login",
  BUYER_REQUEST: "/buyer-requests",
  CUSTOM_REQUESTS_HISTORY: "/user/buyer-requests",
  UPGRADE_ACCOUNT: "/user/upgrade",
  PROPOSALS: "proposals",
  ORDERS_AS_SELLER: "/order/as-seller",
  ORDERS_AS_BUYER: "/order/as-buyer",
  ORDER: "/order",
  DELIVER_ORDER: "deliver",
  REQUEST_CANCEL: "cancel",
  CONFIRM_CANCEL: "cancel-confirm",
  APPROVE_ORDER: "approve",
  DECLINE_ORDER: "decline",
  USER: "user",
  PRODUCT: "product",
  CART: "cart",
  CHAT: "/chat",
};

export default axiosInstance;
