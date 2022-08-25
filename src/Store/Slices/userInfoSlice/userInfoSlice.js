import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import userInfoService from "../../Services/userInfoService";


let initialState = {
    userInfo: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  };


 export const getUser=createAsyncThunk(
  "userInfo/getUser",
  async (data, thunkAPI) => {
    try {
      let token = thunkAPI.getState().auth.user;
      let data = await userInfoService.getUserInfo(token);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || error?.request?.data?.message
      );
    }
  }
  );



let userInfoSlice=createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    reset: (state) => {
      console.log("inside reset");
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers:(builder)=>{
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        console.log("User data fulfiled");
        state.isLoading = false;
        state.userInfo = action.payload;
        state.isSuccess = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        console.log("User data rejected");
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
  }
});


export let {reset}=userInfoSlice.actions;
export default userInfoSlice.reducer;
