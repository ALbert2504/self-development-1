import React from 'react';
import { View, Image } from 'react-native';
import auth from '@react-native-firebase/auth';

// Constants
import { images } from '../../constants';


const Avatar = ({ src = images.emptyAvatar, size = 25, style = {} }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        ...style
      }}
      onTouchStart={() => auth().signOut()}
    >
      <Image
        source={src}
        style={{
          width: size,
          height: size,
          borderRadius: 50,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default Avatar;
