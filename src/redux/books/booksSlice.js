import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YwCoiJn66UMzjtp0eQN5/books';
const options = {
  method: 'GET',
};
const postOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    item_id: 'item124',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald II',
    category: 'Classics',
  }),
};

const initialState = {
  bookItems: [
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
  ],
};

export const setBookItems = createAsyncThunk('book/setBookItem', async () => {
  fetch(url, postOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('succceddded!');
    })
    .then((data) => {
      console.log('data: ', data);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
});

export const getBookItems = createAsyncThunk('book/getBookItem', () => fetch(url, options)
  .then((response) => response.json())
  .catch((err) => console.log('error while getting books: ', err)));

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.bookItems.push(payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.bookItems = state.bookItems.filter(
        (book) => book.item_id !== bookId,
      );
    },
  },
  extraReducers: {
    [getBookItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getBookItems.fulfilled]: (state, action) => {
      console.log('get action.payload: ', action.payload);
      state.isLoading = false;
      // state.bookItems = action.payload;
    },
    [setBookItems.rejected]: (state) => {
      state.isLoading = false;
    },
    [setBookItems.pending]: (state) => {
      state.isLoading = true;
    },
    [setBookItems.fulfilled]: (state, action) => {
      console.log('set action.payload: ', action.payload);
      state.isLoading = false;
      // state.bookItems = action.payload;
    },
    [setBookItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
