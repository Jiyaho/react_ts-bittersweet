import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  loginSuccess?: any;
  register?: any;
  userData?: any;
  postSuccess?: any;
}

const initialState: UserState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<any>) => {
      state.loginSuccess = action.payload;
    },
    registerUser: (state, action: PayloadAction<any>) => {
      state.register = action.payload;
    },
    authUser: (state, action: PayloadAction<any>) => {
      state.userData = action.payload;
    },
    userPosting: (state, action: PayloadAction<any>) => {
      state.postSuccess = action.payload;
    },
  },
});

export default userSlice.reducer;
// export const userActions = userSlice.actions;
export const { loginUser, registerUser, authUser, userPosting } = userSlice.actions;
