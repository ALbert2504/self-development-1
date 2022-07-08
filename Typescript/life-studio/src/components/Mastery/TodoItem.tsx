import {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-bootstrap';
import {
  Check,
  XCircle,
  Trash,
  Pencil,
} from 'react-bootstrap-icons';

// Components
import ModalComponent from '../shared/ModalComponent';
import TodoEditModalBody from './TodoEditModalBody';

// Types
import {Todo} from '../../store/mastery/mastery.actionTypes';

// Actions
import {toggleTodo, onEditTodo, deleteTodo, updateTodo} from '../../store/mastery/mastery.actions';

// Constants
import {RootStore} from '../../store/configureStore';


const TodoItem: FC<Todo> = ({
  name,
  isDone,
  id,
  timeStamp,
}) => {
  const dispatch = useDispatch();
  const {entry} = useSelector((state: RootStore) => state.mastery);

  const handleToggleTodo = (): void => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (): void => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (): void => {
    const todo: Todo = {
      name,
      isDone,
      id,
      timeStamp,
    };

    dispatch(onEditTodo(todo));
  };

  const handleCloseModal = (): void => {
    dispatch(onEditTodo(null));
  };

  const handleSaveModal = async (): Promise<void> => {
    try {
      if (!entry) {
        throw new Error('Something is wrong with todo.');
      }

      dispatch(updateTodo(entry));

      handleCloseModal();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <li className="todo-item list-group-item-action list-group-item-light p-2 mb-1 d-flex align-items-center justify-content-between">
        <span className={isDone ? 'text-decoration-line-through': ''}>{name}</span>
        <div className="d-flex align-items-center justify-content-end">
          <Button
            className="p-1"
            size="lg"
            variant={!isDone ? 'outline-success' : 'outline-danger'}
            onClick={handleToggleTodo}
          >
            {!isDone ? <Check className="d-block" /> : <XCircle className="d-block" />}
          </Button>
          <Button
            className="mx-2 p-1"
            size="lg"
            variant="outline-primary"
            onClick={handleEditTodo}
          >
            <Pencil className="d-block" />
          </Button>
          <Button
            className="p-1"
            size="lg"
            variant="outline-danger"
            onClick={handleDeleteTodo}
          >
            <Trash className="d-block" />
          </Button>
        </div>
      </li>
      <ModalComponent
        handleClose={handleCloseModal}
        handleSave={handleSaveModal}
        show={!!entry}
        title="Edit todo"
      >
        <TodoEditModalBody data={entry} />
      </ModalComponent>
    </>
  );
};

export default TodoItem;