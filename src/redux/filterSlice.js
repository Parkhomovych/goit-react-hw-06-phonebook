import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {// мої reducers
      return action.payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;// мої екшени
