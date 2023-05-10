import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';

const Store = configureStore({
  reducer: { book: bookReducer },
});

export default Store;
