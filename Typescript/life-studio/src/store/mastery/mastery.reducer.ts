import {
  CHANGE_TODO,
  CREATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  GET_TODOS,
  MasteryDispatchTypes,
  Todo,
  TOGGLE_TODO,
  UPDATE_TODO,
} from './mastery.actionTypes';

interface InitialStateI {
  list: Todo[]
  entry: Todo | null
}

const initialState: InitialStateI = {
  list: [],
  entry: null,
}

const masteryReducer = (state: InitialStateI = initialState, action: MasteryDispatchTypes) => {
  switch (action.type) {
    case CREATE_TODO:
    case GET_TODOS:
    case TOGGLE_TODO:
    case DELETE_TODO:
    case UPDATE_TODO:
      return {
        ...state,
        list: action.payload.todos,
      };
    case EDIT_TODO:
    case CHANGE_TODO:
      return {
        ...state,
        entry: action.payload.todo,
      }
    default:
      return state;
  }
};

export default masteryReducer;