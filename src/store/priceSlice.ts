import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",
  initialState: {
    price: 0,
    change24h: 0,
    high24h: 0,
    low24h: 0,
  },
  reducers: {
    updateTicker(state, action) {
      state.price = action.payload.c || state.price;
      state.change24h = action.payload.P || state.change24h;
      state.high24h = action.payload.h || state.high24h;
      state.low24h = action.payload.l || state.low24h;
    },
  },
});

export const { updateTicker } = priceSlice.actions;
export default priceSlice.reducer;
