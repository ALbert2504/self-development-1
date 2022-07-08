import { useDispatch } from "react-redux";

import { removeTodo, toggleTodo } from "../../store/actions/todoList.action";

import "./TodoItem.css";

const TodoItem = ({
  value,
  isDone,
  id,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo(id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  }

  return (
    <li className="todo-item">
      <span
        className="todo-value"
        style={{ textDecoration: isDone ? 'line-through' : 'none' }}
      >
        {value}
      </span>
      <button className="todo-remove" onClick={handleDelete}>x</button>
      <button className="todo-toggle" onClick={handleToggle}>toggle</button>
    </li>
  );
};

export default TodoItem;