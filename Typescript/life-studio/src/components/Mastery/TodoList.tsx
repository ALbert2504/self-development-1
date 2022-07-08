import {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-bootstrap';

// Components
import TodoItem from './TodoItem';

// Actions
import {getTodos} from '../../store/mastery/mastery.actions';

// Constants
import {RootStore} from '../../store/configureStore';

const TodoList: FC = () => {
  const dispatch = useDispatch();
  const {list: todoList} = useSelector((state: RootStore) => state.mastery);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const todoListContent = (
    todoList.map(({name, isDone, id, timeStamp}) => {
      return (
        <TodoItem
          name={name}
          timeStamp={timeStamp}
          isDone={isDone}
          id={id}
          key={id}
        />
      );
    })
  );


  return (
    todoList.length ? (
      <ul className="mb-0 ps-0 list-unstyled">
        {todoListContent}
      </ul>
    ) : (
      <Alert variant="info">
        No todos available
      </Alert>
    )
  );
};

export default TodoList;