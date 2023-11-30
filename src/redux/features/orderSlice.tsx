'use client'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: OrderSlice = {
  order: {
    order: [],
  },
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<Dishes>) => {
      const newItem = action.payload
      const itemExists = state.order.order.some(item => item.id === newItem.id)

      if (!itemExists) {
        state.order.order.push(newItem)
      }
    },
    deleteInOrder: (state, action: PayloadAction<number>) => {
      state.order.order = state.order.order.filter(
        item => item.id !== action.payload
      )
    },
  },
})

export default orderSlice.reducer
export const { addToOrder, deleteInOrder } = orderSlice.actions
