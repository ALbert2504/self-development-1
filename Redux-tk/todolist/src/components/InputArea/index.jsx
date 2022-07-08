import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

import { addTodo } from "../../store/actions/todoList.action";

import "./InputArea.css";

const InputArea = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo({
      id: nanoid(),
      value,
      isDone: false,
    }));

    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className="input-area">
      <input
        name="todoValue"
        type="text"
        className="input-field"
        onChange={handleChange}
        value={value}
      />
      <button type="submit" className="submit-todo">Add todo</button>
    </form>
  );
};

export default InputArea;