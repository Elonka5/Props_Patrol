import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchCurrentUserThunk,
  logInThunk,
  logOutThunk,
  signUpThunk,
} from 'redux/authOperations';

const initialState = {
  user: {
    username: null,
    email: null,
  },
  token: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
  isModal: false,
};

const rejectedStatus = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const pendingStatus = state => {
  state.isLoading = true;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUserThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUserThunk.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(signUpThunk.pending, logInThunk.pending, logOutThunk.pending),
        pendingStatus
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.rejected,
          logInThunk.rejected,
          logOutThunk.rejected
        ),
        rejectedStatus
      ),
});

export const authReducer = authSlice.reducer;
