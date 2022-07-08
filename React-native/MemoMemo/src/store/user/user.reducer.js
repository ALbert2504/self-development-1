import { createReducer } from '@reduxjs/toolkit';

// Actions
import { setUser } from './user.actions';


const initialState = {
  user: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, { payload }) => {
      state.user = payload;
    })
    .addDefaultCase((state) => state);
});

export default userReducer;
