import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  alert: null,
};

const slice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setAlert(state, action) {
      state.alert = action.payload;
    },
  },
});

export const uiActions = slice.actions;
export default slice;
