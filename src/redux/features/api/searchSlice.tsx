import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    addSearchHandler: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { addSearchHandler } = searchSlice.actions;
export default searchSlice.reducer;