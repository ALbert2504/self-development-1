import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

// Constants
import { mixins, sizes, colors } from '../constants';


const BaseInput = ({onChangeText, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[
      styles['base-input-wrapper'],
      isFocused && styles['base-input-wrapper--wrapper'],
    ]}>
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={()=> setIsFocused(false)}
        style={styles['base-input']}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  'base-input-wrapper': {
    ...mixins.borders.border1,
    ...mixins.borders.primary,
    ...mixins.borders.rounded,
    ...mixins.minWidth100,
    paddingHorizontal: sizes.small,
  },
  'base-input-wrapper--wrapper': {
    backgroundColor: colors.primaryOpacity,
  },
  'base-input': {
    padding: 0,
    ...mixins.minWidth100,
  },
});

export default BaseInput;
