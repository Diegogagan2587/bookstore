import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appID = 'lFZeV4dpbBKDSSANp21d';
const urlAPI = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}/books`;

const fetchBooks = async (thunkAPI) => {
  try {
    const response = await axios.get(urlAPI);
    console.log('fetchBooks will return =', response);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

const submitBooks = async (book) => {
  const { item_id, title, author, category } = book;
  try {
    const response = await axios.post(urlAPI, {
      item_id,
      title,
      author,
      category,
    });
    console.log('submitBooks will response =', response);
  } catch (erro) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

fetchBooks(); //----Remove After Debuggin or befor commit!----//

const getBooksFromAPI = createAsyncThunk('books/fetch', fetchBooks);
const postBooksToAPI = createAsyncThunk('books/post', submitBooks);

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
  extraReducers: (builder) => {
    builder.addCase(getBooksFromAPI.fulfilled, (sate, action) => {
      console.log('builder.addCaset(getBooksFromAPI),');
      state = [...action.payload.data];
    });
    builder.addCase(postBooksToAPI.fulfilled,(state, action)=>{
      console.log("Logic for submitting books goes here");
    });
  },
});

export { getBooksFromAPI };
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
