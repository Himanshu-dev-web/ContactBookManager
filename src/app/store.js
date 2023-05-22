import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "../slices/contactslice"

export const store = configureStore({
    reducer: {
     contacts : contactReducer,
    },
  });
  