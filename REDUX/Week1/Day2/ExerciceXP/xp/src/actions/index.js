import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/index";

export const store = configureStore({
  reducer: { counter: counterReducer },
});
