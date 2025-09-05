import { createReducer } from '@reduxjs/toolkit';

export const userReducer = createReducer(
  { loading: false,
  isAuthenticated: false,
  user: null,
  message: null,
  error: null,},
  {
    loginRequest: state => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

  }
);
