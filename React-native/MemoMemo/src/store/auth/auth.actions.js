import { createAsyncThunk } from '@reduxjs/toolkit';

// Services
import { Auth } from '../../services';

// Action types
import {
  SIGN_UP,
  SIGN_IN,
} from './auth.actionTypes';

// Actions
import { setUser } from '../user/user.actions';

export const signUp = createAsyncThunk(
  SIGN_UP,
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const { email, password, username } = data;

      const user = await Auth.signUp(email, password, username);

      dispatch(setUser(user));

      return user;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const signIn = createAsyncThunk(
  SIGN_IN,
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const { email, password, username } = data;

      const user = await Auth.signIn(email, password, username);

      dispatch(setUser(user));

      return user;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
