import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';

// Components
import AuthForm from '../components/pages/Auth/AuthForm';

// Assets
import { mixins, images, sizes } from '../constants';


const Auth = () => {
  return (
    <SafeAreaView style={styles.auth}>
      <ImageBackground style={styles['auth-bg-image']} source={images.signInBg} resizeMode="cover">
        <View style={styles['auth-form-container']}>
          <AuthForm />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  auth: {
    ...mixins.minHeight100,
  },
  'auth-form-container': {
    ...mixins.height100,
    ...mixins.flexCenter,
    padding: sizes.large
  },
  'auth-bg-container': {
    ...mixins.flex1,
  },
  'auth-bg-image': {
    ...mixins.width100,
    ...mixins.height100,
  },
});

export default Auth;
