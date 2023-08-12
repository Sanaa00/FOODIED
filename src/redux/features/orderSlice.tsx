"use client"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
// import { createSelector } from '@reduxjs/toolkit';

const initialState:OrderSlice= {
     order: {
          order:[]
     },
    
     totalPrice:0
}


// import { RootState } from './store'; // Update the path to your store


export const orderSlice = createSlice({
     name: "order",
     initialState,
     reducers: {
          addToOrder: (state, action: PayloadAction<Dishes>) => {
          //  state.order.push(action.payload);
               
                const newItem = action.payload;
                const itemExists = state.order.order.some(item => item.id === newItem.id);

                 if (!itemExists) {
                   state.order.order.push(newItem);
                                     }
                          },
          deleteInOrder: (state, action: PayloadAction<number>) => {
      state.order.order = state.order.order.filter(item => item.id !== action.payload);
    },
     }
     
     
})
// export const selectTotalPrice = createSelector(
//   (state:OrderSlice) => state.order.order,
//   order =>order.reduce((total, item) => total + item.subtotal, 0)
// );
export default orderSlice.reducer
export const {addToOrder,deleteInOrder}=orderSlice.actions