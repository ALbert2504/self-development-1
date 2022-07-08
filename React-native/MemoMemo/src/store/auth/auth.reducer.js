import { createReducer } from '@reduxjs/toolkit';

// Actions
import {
  signUp,
} from './auth.actions';

const initialState = {
  user: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signUp.fulfilled, (state, { payload }) => {
      state.user = payload;
    })
    .addDefaultCase((state) => state);
});

export default authReducer;
