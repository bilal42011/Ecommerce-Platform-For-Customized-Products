import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../Services/authService";


let user=JSON.parse(localStorage.getItem("user"));

let initialState={
    user:user?user:null,
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:''
}

export const register=createAsyncThunk("auth/register",async(formData)=>{
let data=await authService.register(formData);
return data;
});

export const login=createAsyncThunk("auth/login",async(loginData,thunkAPI)=>{
try{
    let data =await authService.login(loginData);
return data;
}
catch(error){
    return thunkAPI.rejectWithValue(error?.response?.data?.message || error?.request?.data?.message);
}

})

let authSlice=createSlice({
name:"auth",
initialState,
reducers:{
    reset:(state)=>{
        console.log("inside reset");
    state.isLoading=false;
    state.isSuccess=false;
    state.isError=false;
    state.message='';
    }
},
extraReducers(builder){
builder
.addCase(register.fulfilled,(state,action)=>{
    console.log("registeration fulfiled");
    state.isLoading=false;
    state.user=action.payload;
    state.isSuccess=true;
})
.addCase(register.rejected,(state,action)=>{
    console.log("registeration rejected");
    state.isLoading=false;
    state.isError=true;
    state.message="response not found 404"
})
.addCase(register.pending,(state)=>{
state.isLoading=true;
})
.addCase(login.fulfilled,(state,action)=>{
    console.log("login fulfiled");
    state.isLoading=false;
    state.user=action.payload;
    state.isSuccess=true;
})
.addCase(login.rejected,(state,action)=>{
    console.log("login rejected");
    state.isLoading=false;
    state.isError=true;
    state.message=action.payload;
})
.addCase(login.pending,(state)=>{
state.isLoading=true;
})

});

export let { reset } = authSlice.actions;

export default authSlice.reducer;
