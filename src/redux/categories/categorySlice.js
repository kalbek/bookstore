import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => state.status === 'Under construction',
  },
});
export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
