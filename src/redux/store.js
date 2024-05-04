import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/api/apiSlice';
import authSlice from './features/auth/authSlice';
import ResetPasswordSlice from './features/resetPasswordSlice/ResetPasswordSlice';

export const store = configureStore({
  reducer: {
    passWordToggle: ResetPasswordSlice,
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddlewares =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
