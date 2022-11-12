import { createSlice } from '@reduxjs/toolkit';

interface StatusState {}

const initialState: StatusState = {};

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {},
});

export const {} = statusSlice.actions;

export default statusSlice.reducer;
