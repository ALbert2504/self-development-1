import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_text}>Todo List Heroes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    width: '100%',
    backgroundColor: '#134393',
  },
  header_text: {
    textAlign: 'center',
    fontSize: 24,
    color: '#ffffff',
  },
});

export default Header;
