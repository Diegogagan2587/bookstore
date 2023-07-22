import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchBooks = async (thunkAPI) => {
  const app_id = 'lFZeV4dpbBKDSSANp21d';
  const url_api = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${app_id}/`;
  try {
    //Here I need to fetch data  and assing a response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

const getBooksFromAPI = createAsyncThunk('books/fetch', fetchBooks);

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
    addBook: (state = initialState, action) => {
      state.push(action.payload);
    },
    removeBook: (state = initialState, action) =>
      state.filter((book) => book.item_id !== action.payload.item_id),
  },
});

export { getBooksFromAPI };
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
