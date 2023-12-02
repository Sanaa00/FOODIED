import { createSlice } from '@reduxjs/toolkit'

const initialState: SearchArg = {
  search: '',
}

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    addSearch: (state, action) => {
      state.search = action.payload
    },
  },
})

export const { addSearch } = searchSlice.actions
export default searchSlice.reducer
