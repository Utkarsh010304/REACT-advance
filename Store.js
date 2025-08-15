import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice"; 

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
