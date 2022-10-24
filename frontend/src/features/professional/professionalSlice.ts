import { createSlice } from '@reduxjs/toolkit';

interface ProfessionalState {}

const initialState: ProfessionalState = {};

export const professionalSlice = createSlice({
  name: 'professional',
  initialState,
  reducers: {},
});

export const {} = professionalSlice.actions;

export default professionalSlice.reducer;
