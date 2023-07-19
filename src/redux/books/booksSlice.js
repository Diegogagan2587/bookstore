import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: () => {
        console.log('will add a book')
    },
    removeBook: () => {
        console.log('will remove a book')
    }
  },
});

export const { addBook, }