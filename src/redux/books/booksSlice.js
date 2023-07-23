import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appID = 'lFZeV4dpbBKDSSANp21d';
const urlAPI = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}/books`;

const fetchBooks = async (thunkAPI) => {
  try {
    const response = await axios.get(urlAPI);

    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

const submitBooks = async (book) => {
  const {
    item_id, title, author, category,
  } = book;
  try {
    const response = await axios.post(urlAPI, {
      item_id,
      title,
      author,
      category,
    });
    return response;
  } catch (error) {
    return error.message;
  }
};

const getBooksFromAPI = createAsyncThunk('books/fetch', fetchBooks);
const postBooksToAPI = createAsyncThunk('books/post', submitBooks);

const initialState = [
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state = initialState, action) => {
      state.push(action.payload);
    },
    removeBook: (state = initialState, action) => {
      axios.delete(`${urlAPI}/${action.payload.item_id}`);
      return state.filter((book) => book.item_id !== action.payload.item_id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooksFromAPI.fulfilled, (state, action) => {
      const arrFromAction = { ...action.payload.data };
      const arrayOFBooks = Object.values(arrFromAction).map(
        (bookArr, index) => ({
          ...bookArr[0],
          item_id: Object.keys(arrFromAction)[index],
        }),
      );

      state.splice(0, state.length, ...arrayOFBooks);
    });
  },
});

export { getBooksFromAPI, postBooksToAPI };
export const { addBook, removeBook, extraReducers } = booksSlice.actions;
export default booksSlice.reducer;
