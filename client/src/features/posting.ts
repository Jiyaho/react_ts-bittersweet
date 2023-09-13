import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { postingsUrl } from '../utils/constants';

interface PostingState {
  postSuccess?: boolean;
  loading?: string;
}
const initialState: PostingState = {
  postSuccess: false,
  loading: 'idle',
};

// 회원가입 사용자 액션을 정의합니다.
export const newPosting = createAsyncThunk('posting/newPosting', async (dataToSubmit: any, thunkAPI) => {
  try {
    console.log(dataToSubmit);
    const response = await axios.post(`${postingsUrl}`, dataToSubmit);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// 사용자 리듀서를 생성합니다.
const postingSlice = createSlice({
  name: 'posting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(newPosting.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(newPosting.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.postSuccess = action.payload;
      // state.postSuccess = true;
    });
    builder.addCase(newPosting.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export default postingSlice.reducer;
