import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  userInfo: Object | null;
}

const initialState: UserState = {
  userInfo: {
    userId: 'Hong',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
