import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: '',
}

const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.category = action.payload
    },
  },
})

export const { addCategory } = categorySlice.actions
export default categorySlice.reducer
