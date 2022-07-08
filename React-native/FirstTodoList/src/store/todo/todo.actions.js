import axios from 'axios';
import { createAction } from '@reduxjs/toolkit/src/createAction';
import { createAsyncThunk } from '@reduxjs/toolkit/src/createAsyncThunk';

// Action types
import {
  ADD_TODO,
  DELETE_TODO,
  ON_DELETE_TODO,
  ON_CANCEL_DELETE_TODO,
  TOGGLE_TODO,
  ON_EDIT_TODO,
  ON_CANCEL_EDIT_TODO,
  EDIT_TODO,
  FETCH_TODOS,
} from "./todo.actionTypes";

export const addTodo = createAction(ADD_TODO);

export const onDeleteTodo = createAction(ON_DELETE_TODO);
export const deleteTodo = createAction(DELETE_TODO);
export const cancelDeleteTodo = createAction(ON_CANCEL_DELETE_TODO);

export const toggleTodo = createAction(TOGGLE_TODO);

export const onEditTodo = createAction(ON_EDIT_TODO);
export const cancelEditTodo = createAction(ON_CANCEL_EDIT_TODO);
export const editTodo = createAction(EDIT_TODO);

export const fetchTodos = createAsyncThunk(
  FETCH_TODOS,
  async (data, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');

      return data;
    } catch (e) {
      rejectWithValue(e.response.data.message);
    }
  },
);
