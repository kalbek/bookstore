import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YwCoiJn66UMzjtp0eQN5/books';

const initialState = {
  bookItems: [],
  error: '',
};

export const getBookItems = createAsyncThunk('book/getBookItem', async () => {
  const response = await axios(url);
  return response.data;
});

export const setBookItems = createAsyncThunk(
  'books/setBookItem',
  async (bookData, thunkAPI) => {
    try {
      const resp = await axios.post(url, bookData);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const deleteBookItems = createAsyncThunk(
  'books/deleteBook',
  async (bookId, thunkAPI) => {
    try {
      const response = await axios.delete(`${url}/${bookId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

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
      state.isLoading = false;
      state.bookItems = [];
      Object.entries(action.payload).forEach((obj) => {
        const bookObj = {
          item_id: obj[0],
          title: obj[1][0].title,
          author: obj[1][0].author,
          category: obj[1][0].category,
        };
        state.bookItems.push(bookObj);
      });
    },
    [getBookItems.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [setBookItems.pending]: (state) => {
      state.isLoading = true;
    },
    [setBookItems.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [setBookItems.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [deleteBookItems.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteBookItems.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [deleteBookItems.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
