// userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  name: null,
  isAdmin: false,
  email: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuth: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.name = action.payload.name;
      state.isAdmin = action.payload.isAdmin;
      state.email = action.payload.email;
    },
  },
});

export const { setUserAuth } = userSlice.actions;
export default userSlice.reducer;
