import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
}

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    addSearch: (state, action) => {
      state.search = 'pizza'
    },
  },
})

export const { addSearch } = searchSlice.actions
export default searchSlice.reducer
