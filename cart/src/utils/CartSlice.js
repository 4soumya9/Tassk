import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guestCart: JSON.parse(localStorage.getItem("guestCart")) || [],
  userCart: [],
  isLoggedIn: false,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToGuest: (state, action) => {
      console.log("guest add");
      const existing = state.guestCart.find(
        (item) => item.id === action.payload,
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.guestCart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("guestCart", JSON.stringify(state.guestCart));
      console.log("guest cart");
    },
    loginUser: (state) => {
      console.log("log in");
      state.isLoggedIn = true;
      state.guestCart.forEach((guestItem) => {
        const existing = state.userCart.find(
          (item) => item.id === guestItem.id,
        );
        if (existing) {
          existing.quantity += guestItem.quantity;
        } else {
          state.userCart.push(guestItem);
        }
      });

      state.guestCart = [];
      localStorage.removeItem("guestCart");
    },
  },
});

export const { addToGuest, loginUser } = CartSlice.actions;
export default CartSlice.reducer;
