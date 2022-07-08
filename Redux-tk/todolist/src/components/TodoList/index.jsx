import { useSelector } from "react-redux";
import TodoItem from "../TodoItem";

import "./TodoList.css";

const TodoList = () => {
  const { todoList } = useSelector((state) => state.todoList);
  const todoListContent = (
    todoList.length ? todoList.map((todoItem) => {
      return (
        <TodoItem
          key={todoItem.id}
          id={todoItem.id}
          value={todoItem.value}
          isDone={todoItem.isDone}
        />
      )
    }) : <p>No todos added yet.</p>
  );

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoListContent}
      </ul>
    </div>

  );
};

export default TodoList;