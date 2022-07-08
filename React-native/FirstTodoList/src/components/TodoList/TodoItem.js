import React from "react";
import { useDispatch } from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Actions
import {
  onDeleteTodo,
  toggleTodo,
  onEditTodo,
} from '../../store/todo/todo.actions';


const TodoItem = ({ id, label, done }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(onDeleteTodo(id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleOnEditTodo = () => {
    dispatch(onEditTodo(id));
  };


  return (
    <View style={styles['todo-item']}>
      <Text
        style={[styles['todo-item__label'], done && styles['todo-item__label--done']]}
        onPress={handleToggle}
      >
        {label}
      </Text>
      <View style={styles['todo-item__actions']}>
        <TouchableRipple
          style={styles['todo-item__action-item']}
          onPress={handleOnEditTodo}
        >
          <Icon name="pencil-alt" size={22} color="#0000ff" />
        </TouchableRipple>
        <TouchableRipple
          style={styles['todo-item__action-item']}
          onPress={handleDelete}
        >
          <Icon name="trash" size={22} color="#ff0000" />
        </TouchableRipple>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  'todo-item': {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  'todo-item__label': {
    fontSize: 16,
  },
  'todo-item__label--done': {
    textDecorationLine: 'line-through',
  },
  'todo-item__actions': {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  'todo-item__action-item': {
    padding: 8,
  },
});

export default TodoItem;
