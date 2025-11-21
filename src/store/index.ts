import { configureStore } from "@reduxjs/toolkit";
import priceSlice from "./priceSlice";
import positionSlice from "./positionSlice";

export const store = configureStore({
  reducer: {
    price: priceSlice,
    position: positionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
