import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import authService from "../../Services/authService";

let user=JSON.parse(localStorage.getItem("user"));

let initialState={
    user:user?user:null,
    isLoading:true,
    isSuccess:false,
    isError:false,
    message:''
}

export const register=createAsyncThunk("auth/register",async()=>{
let data=authService.register({name:"bilal",email:"bilalmalik42011@gmail.com"})
return data;
});


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

}


});


export let {reset}=authSlice.actions;

export default authSlice.reducer;