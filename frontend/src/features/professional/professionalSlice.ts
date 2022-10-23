import { createSlice } from '@reduxjs/toolkit';

interface professionalState {}

const initialState: professionalState = {};

export const professionalSlice = createSlice({
  name: 'professional',
  initialState,
  reducers: {},
});

export const {} = professionalSlice.actions;

export default professionalSlice.reducer;
