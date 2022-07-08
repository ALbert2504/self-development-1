import { createReducer } from '@reduxjs/toolkit';

// Actions
import {
  createPost,
  getPosts,
} from './posts.actions';

const initialState = {
  list: [],
  myList: [],
  entry: null,
};

const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getPosts.fulfilled, (state, { payload }) => {
      state.list = payload;
    })
    .addCase(createPost.fulfilled, (state, { payload }) => {
      console.log('payload in reducer: ',payload);
      state.list.unshift(payload);
      state.myList.unshift(payload);
    })
    .addDefaultCase((state) => state);
});

export default postsReducer;
