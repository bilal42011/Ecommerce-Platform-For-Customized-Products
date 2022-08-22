import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice/authSlice";

let store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("user", JSON.stringify(state.auth.user));
});

export default store;
