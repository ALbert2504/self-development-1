import {ChangeEvent, FC, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {FormGroup, Form} from 'react-bootstrap';

// Types
import {Todo} from '../../store/mastery/mastery.actionTypes';

// Actions
import {changeTodo} from '../../store/mastery/mastery.actions';

interface TodoEditModalBodyI {
  data: Todo | null
}

const TodoEditModalBody: FC<TodoEditModalBodyI> = ({data}) => {
  const dispatch = useDispatch();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    // Todo think better way than using JSON
    const newData: Todo = JSON.parse(JSON.stringify(data));
    newData.name = e.target.value;

    dispatch(changeTodo(newData));
  }, [data]);

  return (
    data ? (
      <div>
        <FormGroup controlId="name">
          <Form.Label>
            Name
          </Form.Label>
          <Form.Control
            value={data.name}
            onChange={handleChange}
          />
        </FormGroup>
      </div>
    ) : (
      <p className="text-danger">
        Something is wrong with todo.
      </p>
    )
  );
};

export default TodoEditModalBody;