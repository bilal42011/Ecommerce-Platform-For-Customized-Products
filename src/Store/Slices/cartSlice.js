import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { product } = action.payload;
      const index = state.products.findIndex(
        (elem) => elem._id === product._id
      );
      if (index !== -1) {
        state.products[index].quantity += product.quantity;
      } else {
        state.products.push(product);
      }
    },
    removeItem(state, action) {
      const { product } = action.payload;
      state.products = state.products.filter(
        (elem) => elem._id !== product._id
      );
    },
    reduceQuantity(state, action) {
      const { product, reduceBy } = action.payload;
      const index = state.products.findIndex(
        (elem) => elem._id === product._id
      );
      if (index !== -1 && reduceBy > 0) {
        state.products[index].quantity -= reduceBy;
      }
    },
  },
});

export const cartActions = slice.actions;
export default slice;
