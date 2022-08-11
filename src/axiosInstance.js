import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/",
});

export const endPoints = {
  REGISTER: "auth/signup",
  LOGIN: "auth/login,",
};

export default instance;
