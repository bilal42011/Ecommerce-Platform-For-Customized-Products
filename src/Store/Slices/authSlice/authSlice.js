import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../Services/authService";

let user = JSON.parse(localStorage.getItem("user") || null);
const token = JSON.parse(localStorage.getItem("token") || null);
let initialState = {
  user: user ? user : null,
  token: token || null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      let data = await authService.register(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || error.message
      );
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (loginData, thunkAPI) => {
    try {
      let data = await authService.login(loginData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || error.message
      );
    }
  }
);

let authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset(state) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },

    logout(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.user = null;
    },

    updateUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log("registeration fulfiled");
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, action) => {
        console.log("registeration rejected");
        state.isLoading = false;
        state.isError = true;
        console.log(state, action);
        state.message = action.payload;
        console.log(action.payload);
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("login fulfiled");
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        console.log("login rejected");
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const authActions = authSlice.actions;
export const { reset } = authActions;
export default authSlice.reducer;
