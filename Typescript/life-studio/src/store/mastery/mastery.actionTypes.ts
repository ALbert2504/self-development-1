export const GET_TODOS = 'GET_TODOS';
export const CREATE_TODO = 'CREATE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const CHANGE_TODO = 'CHANGE_TODO';

export type TodoItem = {
  name: string
  timeStamp: number
  isDone: boolean
}

export type Todo = TodoItem & {
  id: string
}

interface GetTodos {
  type: typeof GET_TODOS
  payload: {
    todos: Todo[]
  }
}

interface CreateTodo {
  type: typeof CREATE_TODO
  payload: {
    todos: Todo[]
  }
}

interface EditTodo {
  type: typeof EDIT_TODO
  payload: {
    todo: Todo | null
  }
}

interface ChangeTodo {
  type: typeof CHANGE_TODO
  payload: {
    todo: Todo
  }
}

interface ToggleTodo {
  type: typeof TOGGLE_TODO,
  payload: {
    todos: Todo[]
  }
}

interface UpdateTodo {
  type: typeof UPDATE_TODO,
  payload: {
    todos: Todo[]
  }
}

interface DeleteTodo {
  type: typeof DELETE_TODO
  payload: {
    todos: Todo[]
  }
}

export type MasteryDispatchTypes = GetTodos | CreateTodo | EditTodo | ToggleTodo | DeleteTodo | UpdateTodo | ChangeTodo;