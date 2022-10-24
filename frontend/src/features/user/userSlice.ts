import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../models/user';

interface UserState {
  userInfo: User | null;
}

const initialState: UserState = {
  userInfo: {
    username: 'Hong',
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
