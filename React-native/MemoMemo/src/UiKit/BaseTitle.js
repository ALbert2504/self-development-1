import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Constants
import { sizes, colors, fontWeights } from '../constants';

const BaseTitle = ({ children, size, color, weight, style, ...props }) => {
  return (
    <Text
      style={{
        fontSize: sizes[size],
        color: colors[color],
        fontWeight: fontWeights[weight],
        ...style,
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

export default BaseTitle;
