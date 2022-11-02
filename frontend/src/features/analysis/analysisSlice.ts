import { createSlice } from '@reduxjs/toolkit';

interface AnalysisState {}

const initialState: AnalysisState = {};

export const analysisSlice = createSlice({
  name: 'analysis',
  initialState,
  reducers: {},
});

export const {} = analysisSlice.actions;

export default analysisSlice.reducer;
