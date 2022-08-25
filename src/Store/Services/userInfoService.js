import axios, { endPoints } from "../../axiosInstance";


let getUserInfo= async (token)=>{
 let config={
        headers:{
Authorization: `Bearer ${token}`            
        }
    }

    let response=await axios.get(endPoints,config);
    
    if(response.data.user){
        return response.data.user;
    }  

}


let userInforService={getUserInfo}
export default userInforService;