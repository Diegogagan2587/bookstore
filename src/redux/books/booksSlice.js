import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state,action) => {
      state = {
        ...state,
        action.payload,
      }
    },
    removeBook: (state, action) => {
      state = state.map((book)=>{
        if(book.id !== action.payload) {
          return book;
        }
      })
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
