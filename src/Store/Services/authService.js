import axios, { endPoints } from "../../axiosInstance";

let register = async (data) => {
  let response = await axios.post(endPoints.REGISTER, data);

  if (response?.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  }
};

let login = async (data) => {
  let response = await axios.post(endPoints.LOGIN, data);
  console.log(response);
  if (response?.data?.token) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  }
};

const exports = { register, login }; //added to prevent warnings

export default exports;
