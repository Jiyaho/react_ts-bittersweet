// userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface UserState {
  loginSuccess?: boolean;
  register?: any;
  userData?: any;
}
const initialState: UserState = {};

// 로그인 사용자 액션을 정의합니다.
export const loginUser = createAsyncThunk('user/login', async (dataToSubmit) => {
  const response = await fetch(`${process.env.REACT_APP_HOST}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataToSubmit),
    credentials: 'include',
  });
  const data = await response.json();
  return data;
});

// 회원가입 사용자 액션을 정의합니다.
export const registerUser = createAsyncThunk('user/register', async (dataToSubmit) => {
  const response = await fetch(`${process.env.REACT_APP_HOST}/api/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataToSubmit),
    credentials: 'include',
  });
  const data = await response.json();
  return data;
});

// 인증 사용자 액션을 정의합니다.
export const auth = createAsyncThunk('user/auth', async () => {
  const response = await fetch(`${process.env.REACT_APP_HOST}/api/users/auth`, {
    method: 'GET',
    credentials: 'include',
  });
  const data = await response.json();
  return data;
});

// 사용자 리듀서를 생성합니다.
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        // 로그인 성공 시의 처리를 수행합니다.
        state.loginSuccess = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        // 회원가입 성공 시의 처리를 수행합니다.
        state.register = action.payload;
      })
      .addCase(auth.fulfilled, (state, action) => {
        // 인증 성공 시의 처리를 수행합니다.
        state.userData = action.payload;
      });
  },
});

export default userSlice.reducer;
