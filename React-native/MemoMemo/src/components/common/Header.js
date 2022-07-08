import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// Components
import Avatar from '../shared/Avatar';

// Assets
import {mixins, colors, sizes} from '../../constants';


const Header = () => {
  const {goBack, canGoBack} = useNavigation();


  return (
    <View style={styles['header']}>
      <View style={styles['header__left']}>
        {canGoBack() && (
          <TouchableRipple onPress={goBack} style={styles['header__go-back']} borderless>
            <Text style={styles['header__go-back-icon']}>&lt;</Text>
          </TouchableRipple>
        )}
        <Text style={styles['header__title']}>
          MemoMemo
        </Text>
      </View>
      <Avatar size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  'header': {
    height: 50,
    ...mixins.width100,
    backgroundColor: colors.primaryLight,
    ...mixins.alignItemsCenter,
    ...mixins.justifyContentBetween,
    ...mixins.flexRow,
    paddingHorizontal: sizes.small,
  },
  'header__left': {
    ...mixins.alignItemsCenter,
    ...mixins.justifyContentStart,
    ...mixins.flexRow,
  },
  'header__title': {
    color: colors.white,
    fontSize: sizes.large / 1.25,
  },
  'header__go-back': {
    borderRadius: 50,
    width: sizes.extraLarge,
    height: sizes.extraLarge,
    ...mixins.flexCenter,
    ...mixins.margins.marginRight2,
  },
  'header__go-back-icon': {
    color: colors.white,
  },
});

export default Header;
