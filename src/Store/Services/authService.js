import axios, { endPoints } from "../../axiosInstance";

let register = async (data) => {
  let response = await axios.post(endPoints.REGISTER, data);

  if (response?.data) {
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    return response.data;
  }
};

let login = async (data) => {
  let response = await axios.post(endPoints.LOGIN, data);

  if (response?.data?.token) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("user", JSON.stringify(response.data.user));
    return response.data;
  }
};

const exports = { register, login }; //added to prevent warnings

export default exports;
