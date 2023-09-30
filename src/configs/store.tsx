// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import enrollmentReducer from './slices/enrollmentSlice';

export const store = configureStore({
  reducer: {
    enrollment: enrollmentReducer,
  },
});
