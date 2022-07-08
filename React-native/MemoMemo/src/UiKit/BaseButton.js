import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

// Constants
import { colors, sizes, mixins } from '../constants';

const BaseButton = ({ children, variant, style, onPress, ...props }) => {
  return (
    <TouchableRipple
      onPress={onPress}
      style={{
        backgroundColor: colors[variant],
        fontSize: sizes.base,
        paddingHorizontal: sizes.base,
        paddingVertical: sizes.small,
        ...style,
      }}
      {...props}
    >
      <Text style={styles['base-button__label']}>
        {children}
      </Text>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  'base-button__label': {
    color: colors.white,
    ...mixins.textAlignments.center,
  }
});

export default BaseButton;
