import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './user';
import postingSlice from './posting';
// import userReducer from './user/userSlice';

// const combinedReducers = combineReducers({
//   userReducer: userSlice,
//   postingReducer: postingSlice
// })
// export type MyStore = ReturnType<typeof combineReducers>

// const rootReducer = (
//   state: ReturnType<typeof combinedReducers>,
//   action: AnyAction
// ) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state,
//       ...action.payload,
//     }
//     return nextState
//   }
//   return combinedReducers(state, action)
// }
// const store = configureStore<MyStore({
//   reducer: rootReducer
// });

const store = configureStore({
  reducer: {
    user: userSlice,
    posting: postingSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
