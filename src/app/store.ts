import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cakeListReducer from '../reducer/cakeListReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // サンプルのReducerなので消してもよい
    cakeList: cakeListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>; 
