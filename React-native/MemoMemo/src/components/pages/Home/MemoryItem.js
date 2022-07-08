import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

// Components
import Avatar from '../../shared/Avatar';

// UIKit
import { BaseTitle } from '../../../UiKit';

// Constants
import { mixins, sizes, images } from '../../../constants';


const MemoryItem = ({ data }) => {
  return (
    <View style={styles['memory-item']}>
      <View style={styles['memory-item__user-info']}>
        <Avatar size={30} />
        <BaseTitle
          style={styles['memory-item__username']}
          size="base"
          weight="bold"
        >
          {data.owner.username}
        </BaseTitle>
      </View>
      <View style={styles['memory-item__item-info']}>
        <Image
          source={{ uri: data.image || images.demoImg }}
          style={styles['memory-item__item-img']}
          resizeMode="cover"
        />
        <BaseTitle
          size="large"
          weight="bold"
        >
          {data.title}
        </BaseTitle>
        <Text>{data.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  'memory-item': {
    ...mixins.margins.marginBottom3,
  },
  'memory-item__user-info': {
    ...mixins.flexRow,
    ...mixins.justifyContentStart,
    ...mixins.alignItemsCenter,
    height: 45,
  },
  'memory-item__username': {
    marginLeft: sizes.small,
  },
  'memory-item__item-info': {

  },
  'memory-item__item-img': {
    ...mixins.width100,
    height: 200,
  },
});

export default MemoryItem;
