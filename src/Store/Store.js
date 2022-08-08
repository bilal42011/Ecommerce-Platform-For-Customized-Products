import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice/authSlice";

let store=configureStore({
    reducer:{
        auth:authReducer
    }
});

export default store;
