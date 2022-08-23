import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice/authSlice";
import uiSlice from "./Slices/uiSlice";
import cartSlice from "./Slices/cartSlice";

let store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("user", JSON.stringify(state.auth.user));
});

export default store;
