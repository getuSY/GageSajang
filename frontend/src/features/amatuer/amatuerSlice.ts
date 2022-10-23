import { createSlice } from '@reduxjs/toolkit';

interface AmatuerState {}

const initialState: AmatuerState = {};

export const amatuerSlice = createSlice({
  name: 'amatuer',
  initialState,
  reducers: {},
});

export const {} = amatuerSlice.actions;

export default amatuerSlice.reducer;
