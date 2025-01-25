import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartData: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { _id, name, price } = action.payload;
      state.cartData.push({ _id, name, price, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item._id !== action.payload
      );
    },
    increaseQuantity: (state, action) => {
      const _id = action.payload;
      const item = state.cartData.find((item) => item._id === _id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const _id = action.payload;
      const item = state.cartData.find((item) => item._id === _id);
      if (item) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
