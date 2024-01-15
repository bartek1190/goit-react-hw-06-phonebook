import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
