import React, {FC, ChangeEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Container, Form} from 'react-bootstrap';

// Components
import TodoList from '../../components/Mastery/TodoList';

// HOC
import withAuth from '../../HOC/withAuth';

// Actions
import {createTodo} from '../../store/mastery/mastery.actions';

// Styles
import './Mastery.scss';


const Mastery: FC = () => {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createTodo(todoValue));
    setTodoValue('');
  };

  return (
    <div className="mastery">
      <Container>
        <div className="py-4">
          <Form className="d-flex align-items-center justify-content-start" onSubmit={handleSubmit}>
            <Form.Control
              className="flex-grow-1 text-primary"
              onChange={handleChange}
              value={todoValue}
              type="text"
              placeholder="Write todo here"
            />
            <button className="btn btn-primary ms-4">Add</button>
          </Form>
        </div>
        <p className="text-primary">
          {new Date().toLocaleDateString()}
        </p>
        <div>
          <TodoList />
        </div>
      </Container>
    </div>
  );
};

export default withAuth(Mastery);