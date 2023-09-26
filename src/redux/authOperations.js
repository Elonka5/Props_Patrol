import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  setAuthHeader,
  signIn,
  signOut,
  signUp,
} from '../services/api/api';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signUp(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signIn(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await signOut();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return rejectWithValue('Unable to fetch user.');
    }

    setAuthHeader(persistedToken);

    try {
      const data = await fetchCurrentUser();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
