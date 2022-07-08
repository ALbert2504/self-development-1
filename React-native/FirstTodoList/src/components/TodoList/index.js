import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  TextInput,
  ScrollView,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Modal } from 'react-native-paper';
import uuid from 'react-native-uuid';

// Components
import TodoItem from './TodoItem';
import ConfirmModal from '../shared/ConfirmModal';

// HOC
import FadeInView from '../../HOC/FadeInView';

// Constants
import { todoItemActions } from '../../constants';

// Actions
import {
  addTodo,
  deleteTodo,
  cancelDeleteTodo,
  cancelEditTodo,
  editTodo,
  fetchTodos,
} from '../../store/todo/todo.actions';

// Mixins
import { inputBorderBottomMixin } from '../../assets/mixins';


const TodoList = () => {
  /** Essentials */
  const dispatch = useDispatch();

  /** Store */
  const { todoList, todoAction, todoEntry } = useSelector((state) => state.todo);

  const [value, setValue] = useState('');
  const [editValue, setEditValue] = useState('');

  /** Handlers */
  const handleChange = useCallback((value) => {
    if (todoAction === todoItemActions.EDIT && todoEntry) {
      setEditValue(value);
    } else {
      setValue(value);
    }
  }, [todoAction, todoEntry]);

  const handleSubmit = () => {
    if (!value.trim()) {
      return alert('The field cannot be empty.');
    }

    dispatch(addTodo({
      id: uuid.v4(),
      label: value.trim(),
      done: false,
    }));

    setValue('');
  };

  // Delete actions
  const handleConfirmDelete = () => {
    dispatch(deleteTodo(todoEntry.id));
  };

  const handleCancelDelete = () => {
    dispatch(cancelDeleteTodo());
  };

  // Edit actions
  const handleConfirmEdit = () => {
    dispatch(editTodo({
      value: editValue,
      id: todoEntry.id,
    }));
    setEditValue('');
  };

  const handleCancelEdit = () => {
    dispatch(cancelEditTodo());
  };

  /** Effects */
  useEffect(() => {
    if (todoAction === todoItemActions.EDIT && todoEntry) {
      setEditValue(todoEntry.label);
    }
  }, [todoAction, todoEntry]);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  /** Content */
  const todoListContent = (
    todoList.map(({ id, label, done }) => {
      return (
        <TodoItem
          key={id}
          id={id}
          label={label}
          done={done}
        />
      );
    })
  );

  const modalContent = useMemo(() => {
    switch (todoAction) {
      case todoItemActions.DELETE:
        return (
          <ConfirmModal
            text="Are you sure want to delete this item?"
            handleConfirm={handleConfirmDelete}
            handleCancel={handleCancelDelete}
          />
        );
      case todoItemActions.EDIT:
        return (
          <ConfirmModal
            text="Edit Todo"
            handleConfirm={handleConfirmEdit}
            handleCancel={handleCancelEdit}
          >
            <TextInput
              style={styles['edit-todo-modal__input']}
              value={editValue}
              onChangeText={handleChange}
            />
          </ConfirmModal>
        );
      default:
        return null;
    }
  }, [todoEntry, todoAction, editValue]);


  return (
    <View style={styles['todo-list']}>
      <View style={styles['todo-list__form']}>
        <TextInput
          style={styles['todo-list__form-input']}
          value={value}
          onChangeText={handleChange}
          placeholder="What are you gonna do..."
          onSubmitEditing={handleSubmit}
        />
        <Button
          title="Add"
          onPress={handleSubmit}
        />
      </View>
      <ScrollView>
        {todoListContent}
      </ScrollView>
      <Modal
        contentContainerStyle={styles['todo-list__submit-modal-content']} visible={todoEntry && todoAction}
      >
        <FadeInView>
          {modalContent}
        </FadeInView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  'todo-list': {
    paddingVertical: 8,
    paddingHorizontal: 16,
    minHeight: Dimensions.get('window').height,
  },
  'todo-list__form': {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  'todo-list__form-input': {
    ...inputBorderBottomMixin,
    width: '80%',
    marginRight: 12,
  },
  'todo-list__submit-modal-content': {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  'edit-todo-modal__input': {
    ...inputBorderBottomMixin,
    width: 200,
  },
});

export default TodoList;
