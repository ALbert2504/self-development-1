import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../actionTypes/todoList.actionType";
import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction(ADD_TODO);
export const removeTodo = createAction(REMOVE_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);