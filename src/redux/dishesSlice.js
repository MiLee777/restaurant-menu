import { createSlice } from '@reduxjs/toolkit';

const dishesSlice = createSlice({
  name: 'dishes',
  initialState: {
    selectedCategory: 'SEAFOOD'
  },
  reducers: {

  }
})

export const getSelectedCategory = state => state.dishes.selectedCategory;
export default dishesSlice.reducer;