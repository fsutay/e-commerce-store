import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filter-slice";

export const store = configureStore({
  reducer: filterReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;