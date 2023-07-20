import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import booksReducer from './books/booksSlice';

const store = configureStore({
  categories: categoriesReducer,
  books: booksReducer,
});

export default store;
