"use client"
import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/orderSlice"
import { apiSlice } from "./features/api/api";
import userReducer from "./features/api/userSlice"
import searchReducer from "./features/api/searchSlice"
export const store = configureStore({
  


     reducer: {
          user: userReducer,
          search:searchReducer,
          order: orderReducer,
           [apiSlice.reducerPath]: apiSlice.reducer,
     },
    
    
    
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
