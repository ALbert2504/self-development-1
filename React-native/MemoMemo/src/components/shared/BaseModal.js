import * as React from 'react';
import { View } from 'react-native';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

const BaseModal = ({ visible, onDismiss, children, ...props }) => {

  const contentStyle = { backgroundColor: 'white', padding: 20, width: '80%' };
  const containerStyle = { alignItems: 'center' };

  return (
      <Portal>
        <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={containerStyle}>
          <View style={contentStyle}>
            {children}
          </View>
        </Modal>
      </Portal>
  );
};

export default BaseModal;
