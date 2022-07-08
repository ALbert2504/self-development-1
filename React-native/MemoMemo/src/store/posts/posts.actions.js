import { createAsyncThunk } from '@reduxjs/toolkit';

// Services
import { Post } from '../../services';

// Utils
import { uriToBlob } from '../../utils';

// Action types
import {
  CREATE_POST,
  GET_POST,
} from './posts.actionTypes';


export const createPost = createAsyncThunk(
  CREATE_POST,
  async (data, { rejectWithValue }) => {
    try {
      return await Post.createPost(data);
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const getPosts = createAsyncThunk(
  GET_POST,
  async (data, { rejectWithValue }) => {
    try {
      return await Post.getPosts();
    } catch (e) {
      rejectWithValue(e);
    }
  },
);
