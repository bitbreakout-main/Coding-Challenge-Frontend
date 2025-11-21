import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  side: null as "LONG" | "SHORT" | null,
  entryPrice: 0,
  leverage: 5,
  sizeUsd: 10000,
  unrealizedPnl: 0,
  roe: 0,
  liqPrice: 0,
};

const positionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {
    openPosition(state, action) {
      return { ...state, ...action.payload };
    },
    updatePnl(state, action) {
      state.unrealizedPnl = action.payload.pnl;
      state.roe = action.payload.roe;
      state.liqPrice = action.payload.liqPrice;
    },
    closePosition() {
      return initialState;
    },
    setLeverage(state, action) {
      state.leverage = action.payload;
    },
    setSizeUsd(state, action) {
      state.sizeUsd = action.payload;
    },
  },
});

export const { openPosition, updatePnl, closePosition, setLeverage, setSizeUsd } = positionSlice.actions;
export default positionSlice.reducer;
