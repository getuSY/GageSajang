import { createSlice } from '@reduxjs/toolkit';

interface SimulationState {}

const initialState: SimulationState = {};

export const simulationSlice = createSlice({
  name: 'simulation',
  initialState,
  reducers: {},
});

export const {} = simulationSlice.actions;

export default simulationSlice.reducer;
