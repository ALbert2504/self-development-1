import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

// Components
import AddNewPostForm from '../components/pages/AddNewPost/AddNewPostForm';

// Assets
import { mixins, sizes } from '../constants';

const AddNewPost = () => {
  return (
    <View style={styles['add-new-post']}>
      <AddNewPostForm />
    </View>
  );
};

const styles = StyleSheet.create({
  'add-new-post': {
    padding: sizes.base,
  },
});

export default AddNewPost;
