import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";

// Mixins
import { modalBorderMixin } from '../../assets/mixins';


const ConfirmModal = ({ text, handleConfirm, handleCancel, children }) => {
  return (
    <View style={styles['confirm-modal']}>
      <View style={styles['confirm-modal__header']}>
        <TouchableRipple
          style={styles['confirm-modal__action-item']}
          onPress={handleCancel}
        >
          <Text>&times;</Text>
        </TouchableRipple>
      </View>
      <View style={styles['confirm-modal__body']}>
        <Text>{text}</Text>
        {children}
      </View>
      <View style={styles['confirm-modal__footer']}>
        <TouchableRipple
          style={styles['confirm-modal__action-item']}
          onPress={handleCancel}
        >
          <Icon name="times" size={22} color="#ff0000" />
        </TouchableRipple>
        <TouchableRipple
          style={[styles['confirm-modal__action-item'], styles['confirm-modal__action-item-confirm']]}
          onPress={handleConfirm}
        >
          <Icon name="check" size={22} color="#00ff00" />
        </TouchableRipple>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  'confirm-modal': {
    width: '80%',
    ...modalBorderMixin,
  },
  'confirm-modal__header': {
    padding: 8,
    textAlign: 'right',
    alignItems: 'flex-end',
    width: '100%',
  },
  'confirm-modal__body': {
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    borderTopWidth: 2,
    borderTopColor: '#ccc',
    width: '100%',
  },
  'confirm-modal__footer': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 8,
  },
  'confirm-modal__action-item': {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems:'center',
  },
  'confirm-modal__action-item-confirm': {
    marginLeft: 8,
  }
});

export default ConfirmModal;
