import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Constants
import { colors, sizes } from '../constants';


const FormGroup = ({ label, children, style }) => {
  return (
    <View style={{
      ...style,
    }}>
      <Text style={styles['form-group__label']}>{label}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  'form-group__label': {
    marginBottom: sizes.small,
    fontSize: sizes.base,
    color: colors.primary,
  },
});

export default FormGroup;
