import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAllCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setAllCart} = cartSlice.actions;

export default cartSlice.reducer;
