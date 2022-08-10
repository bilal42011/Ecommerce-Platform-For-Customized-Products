import axios from "../../axiosInstance";

let Register_POST_URL="api/auth/signup";


let register=async( data )=>{
let response=await axios.post(Register_POST_URL,data);

if(response?.data){
localStorage.setItem("user",JSON.stringify(response.data));
return response.data;
}

}

let login_POST_URL="api/auth/login";

let login=async( data )=>{
    let response=await axios.post(login_POST_URL,data);
    
    if(response?.data?.token){
    localStorage.setItem("user",JSON.stringify(response.data.token));
    return response.data.token;    
}
    
    }


export default {
    register,
    login
};