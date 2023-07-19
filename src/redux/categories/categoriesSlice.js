import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      if (action.payload) {
        return "under construction";
      }
    },
  },
});

export default categoriesSlice.reducer;
