import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

// Components
import MemoryItem from "./MemoryItem";

// Actions
import { getPosts } from '../../../store/posts/posts.actions';

// Constants
import { sizes } from '../../../constants';


const MemoriesList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.posts);
  console.log(list, 'list');
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <MemoryItem data={item} />}
      keyExtractor={(item) => item.id}
      style={styles['memories-list']}
    />
  );
};

const styles = StyleSheet.create({
  'memories-list': {
    paddingHorizontal: sizes.small,
    paddingBottom: sizes.large,
  },
});



export default MemoriesList;
