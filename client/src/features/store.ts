import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import postingSlice from './postingSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    posting: postingSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
