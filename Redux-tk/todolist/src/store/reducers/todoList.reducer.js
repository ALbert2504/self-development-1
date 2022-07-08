import { createReducer } from "@reduxjs/toolkit";
import {
  addTodo,
  removeTodo,
  toggleTodo,
} from "../actions/todoList.action";

const initialState = {
  todoList: [],
  todoEntry: null,
};

const todoListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo.type, (state, action) => {
      state.todoList.push(action.payload);
    })
    .addCase(toggleTodo.type, (state, action) => {
      const foundTodo = state.todoList.find((todoItem) => todoItem.id === action.payload);
      foundTodo.isDone = !foundTodo.isDone;
    })
    .addCase(removeTodo.type, (state, action) => {
      return {
        ...state,
        todoList: state.todoList.filter((todoItem) => todoItem.id !== action.payload)
      };
    })
    .addDefaultCase((state) => state);
});

export default todoListReducer;