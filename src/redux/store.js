import { configureStore } from '@reduxjs/toolkit';
import dishes from './dishesSlice.js';
import cart from './cartSlice.js';

export const store = configureStore({
  reducer: {
    dishes: dishes,
    cart: cart
  },
})