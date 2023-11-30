'use client'
import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './features/orderSlice'
import { apiSlice } from './features/api/api'
import userReducer from './features/api/userSlice'
import searchReducer from './features/api/searchSlice'
import categoryReducer from './features/api/categorySlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    category: categoryReducer,
    order: orderReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
