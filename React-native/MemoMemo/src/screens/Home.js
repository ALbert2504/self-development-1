import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Components
import MemoriesList from '../components/pages/Home/MemoriesList';

// UIKit
import { BaseButton } from '../UiKit';

// Constants
import { mixins } from '../constants';


const Home = ({ navigation }) => {
  return (
    <View style={{ height: '100%' }}>
      <MemoriesList />
      <BaseButton
        variant="primary"
        style={styles['home__add-btn']}
        onPress={() => navigation.navigate('AddNewPost')}
      >
        <Icon name="plus" />
      </BaseButton>
    </View>
  );
};

const styles = StyleSheet.create({
  'home__add-btn': {
    position: 'absolute',
    bottom: 25,
    right: 25,
    width: 50,
    height: 50,
    borderRadius: 50,
    ...mixins.flexCenter,
  },
});

export default Home;
