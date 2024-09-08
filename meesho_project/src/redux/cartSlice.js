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
        // If item is already in the cart, increase its quantity and update total price
        existingItem.quantity += 1;
        existingItem.totalPrice += item.price;
      } else {
        // If item is new to the cart, add it
        state.cartItems.push({
          ...item,
          quantity: 1,         // Initial quantity set to 1
          totalPrice: item.price, // Initial total price is the price of the item
        });
      }

      // Update global cart state
      state.totalQuantity += 1; // Increment total quantity of items in cart
      state.totalAmount += item.price; // Increment total amount based on item price
    },
    
    // Additional reducers can go here, for example:
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

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
