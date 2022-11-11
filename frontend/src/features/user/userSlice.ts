import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../models/user';

interface UserState {
  userInfo: User | null;
}

const initialState: UserState = {
  userInfo: {
    username: '',
    userId: '',
    password: '',
    store: {
      name: '',
      address: '',
      cs: '',
      quarter: 0,
      clerk: 0,
      area: 0,
    },
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
    },
    login: () => {},
  },
});

export const { logout, login } = userSlice.actions;

export default userSlice.reducer;
