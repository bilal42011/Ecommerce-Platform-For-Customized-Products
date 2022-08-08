import { createSlice } from "@reduxjs/toolkit";

let user=JSON.parse(localStorage.getItem("user"));

let initialState={
    user:user?user:null,
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:''
}

let authSlice=createSlice({
name:"auth",
initialState,
reducers:{
    reset:(state)=>{
    state.isLoading=false;
    state.isSuccess=false;
    state.isError=false;
    state.message='';
    }
}


});


export const {reset}=authSlice.actions;

export default authSlice.reducer;