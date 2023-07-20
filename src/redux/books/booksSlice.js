import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state = initialState, action) => state.push(action.payload),
    removeBook: (state = initialState, action) => state.filter(
      (book) => book.item_id !== action.payload.item_id,
    ),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
