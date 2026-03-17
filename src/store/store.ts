import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './bookingSlice';

const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export default store;
