import {Dispatch} from 'redux';

import {
  CHANGE_TODO,
  CREATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  GET_TODOS,
  TOGGLE_TODO,
  UPDATE_TODO,
  MasteryDispatchTypes,
  Todo,
  TodoItem,
} from './mastery.actionTypes';

// Services
import mastery from '../../services/mastery.service';

// Constants
import {RootStore} from '../configureStore';

export const createTodo = (value: string) => async (dispatch: Dispatch<MasteryDispatchTypes>) => {
  try {
    const response = await mastery.createTodo(value);

    if (!response) {
      throw new Error('Something went wrong.');
    }

    dispatch({
      type: CREATE_TODO,
      payload: {
        todos: response,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const getTodos = () => async (dispatch: Dispatch<MasteryDispatchTypes>) => {
  try {
    const response = await mastery.getTodos();

    if (!response) {
      throw new Error('Something went wrong.');
    }

    dispatch({
      type: GET_TODOS,
      payload: {
        todos: response,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const toggleTodo = (id: string) => async (dispatch: Dispatch<MasteryDispatchTypes>, getState: () => RootStore) => {
  try {
    const {mastery: {list}} = getState();
    const todo = list.find((item) => item.id === id);

    if (!todo) {
      throw new Error('Something went wrong.');
    }

    const newTodoData: TodoItem = {
      name: todo.name,
      isDone: !todo.isDone,
      timeStamp: todo.timeStamp,
    };

    const response = await mastery.editTodo(id, newTodoData);

    if (!response) {
      throw new Error('Something went wrong.');
    }

    console.log(response, 'response response response');

    dispatch({
      type: TOGGLE_TODO,
      payload: {
        todos: response,
      },
    });

  } catch (e) {
    console.log(e);
  }
};

export const deleteTodo = (id: string) => async (dispatch: Dispatch<MasteryDispatchTypes>) => {
  try {
    const response = await mastery.deleteTodo(id);

    if (!response ) {
      throw new Error('Something went wrong');
    }

    dispatch({
      type: DELETE_TODO,
      payload: {
        todos: response,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateTodo = (todo: Todo) => async (dispatch: Dispatch<MasteryDispatchTypes>) => {
  try {
    const newTodoData: TodoItem = {
      name: todo.name,
      isDone: todo.isDone,
      timeStamp: todo.timeStamp,
    };

    const response = await mastery.editTodo(todo.id, newTodoData);

    if (!response) {
      throw new Error('Something went wrong');
    }

    dispatch({
      type: UPDATE_TODO,
      payload: {
        todos: response,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const onEditTodo = (todo: Todo | null): MasteryDispatchTypes => {
  return {
    type: EDIT_TODO,
    payload: {
      todo,
    },
  };
};

export const changeTodo = (todo: Todo): MasteryDispatchTypes => {
  return {
    type: CHANGE_TODO,
    payload: {
      todo,
    },
  };
};