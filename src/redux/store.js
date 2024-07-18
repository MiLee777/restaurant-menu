import { configureStore } from '@reduxjs/toolkit';
import dishes from './dishesSlice.js'

export const store = configureStore({
  reducer: {
    dishes: dishes
  },
})