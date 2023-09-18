// userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  name: null,
  isAdmin: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuth: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.name = action.payload.name;
      state.isAdmin = action.payload.isAdmin;
    },
  },
});

export const { setUserAuth } = userSlice.actions;
export default userSlice.reducer;
