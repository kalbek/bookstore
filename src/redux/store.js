import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoryReducer from './categories/categorySlice';

const Store = configureStore({
  reducer: { book: bookReducer, category: categoryReducer },
});

export default Store;
