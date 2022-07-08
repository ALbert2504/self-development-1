import uuid from 'react-native-uuid';
import { createReducer } from '@reduxjs/toolkit/src/createReducer';

// Constants
import { todoItemActions } from '../../constants';

// Helpers
import { transformTodoData } from '../../utils/helpers';

// Actions
import {
  addTodo,
  deleteTodo,
  onDeleteTodo,
  cancelDeleteTodo,
  toggleTodo,
  onEditTodo,
  cancelEditTodo,
  editTodo,
  fetchTodos,
} from './todo.actions';

const initialState = {
  todoList: [
    {
      id: uuid.v4(),
      done: false,
      label: 'Buy milk',
    },
    {
      id: uuid.v4(),
      done: true,
      label: 'Do yoga',
    },
    {
      id: uuid.v4(),
      done: false,
      label: 'Program on react native',
    },
  ],
  todoEntry: null,
  todoRecycleBin: [],
  todoAction: null,
};

const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, { payload }) => {
      state.todoList.unshift(payload);
    })
    .addCase(onDeleteTodo, (state, { payload }) => {
      state.todoEntry = state.todoList.find((todoItem) => todoItem.id === payload);
      state.todoAction = todoItemActions.DELETE;
    })
    .addCase(cancelDeleteTodo, (state) => {
      state.todoEntry = null;
      state.todoAction = null;
    })
    .addCase(deleteTodo, (state, { payload }) => {
      state.todoList = state.todoList.filter((todoItem) => todoItem.id !== payload);
      state.todoEntry = null;
      state.todoAction = null;
    })
    .addCase(onEditTodo, (state, { payload }) => {
      state.todoEntry = state.todoList.find((todoItem) => todoItem.id === payload);
      state.todoAction = todoItemActions.EDIT;
    })
    .addCase(cancelEditTodo, (state) => {
      state.todoEntry = null;
      state.todoAction = null;
    })
    .addCase(editTodo, (state, { payload }) => {
      const entry = state.todoList.find((todoItem) => todoItem.id === payload.id);
      entry.label = payload.value;

      state.todoEntry = null;
      state.todoAction = null;
    })
    .addCase(toggleTodo, (state, { payload }) => {
      const entry = state.todoList.find((todoItem) => todoItem.id === payload);
      entry.done = !entry.done;
    })
    .addCase(fetchTodos.fulfilled, (state, { payload }) => {
      const formattedTodoList = payload.map(transformTodoData);
      state.todoList.push(...formattedTodoList);
    })
    .addDefaultCase((state) => state);
});

export default todoReducer;
