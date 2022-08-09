import axios from "../../axiosInstance";

let POST_URL = "api/register";

let register = async (data) => {
  let response = await axios.post(POST_URL, data);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export default register;
