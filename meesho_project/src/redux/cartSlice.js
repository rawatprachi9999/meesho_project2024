import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += item.price;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1,
          totalPrice: item.price,
        });
      }

      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },

    reduceQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(cartItem => cartItem.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
          state.totalQuantity -= 1;
          state.totalAmount -= existingItem.price;
        } else {
          // If quantity is 1, remove item from cart
          state.totalQuantity -= 1;
          state.totalAmount -= existingItem.totalPrice;
          state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== id);
        }
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(cartItem => cartItem.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== id);
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, reduceQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
