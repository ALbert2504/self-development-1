import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Text,
  View,
  StyleSheet, Button,
} from 'react-native';

// UI Kit
import {
  BaseTitle,
  BaseInput,
  FormGroup,
  BaseButton,
} from '../../../UiKit';

// Constants
import { sizes, mixins, colors, formValuesFields } from '../../../constants';

// Hooks
import { useFormState } from '../../../hooks';

// Actions
import { signIn, signUp } from '../../../store/auth/auth.actions';

const { auth: { confirmPassword, email, password, username } } = formValuesFields;



const AuthForm = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useFormState(username, email, password, confirmPassword);

  const [isSignUp, setIsSignUp] = useState(false);
  const [show, setShow] = useState(false);

  const handleChangeAuthMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleChange = (name, value) => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: {
          ...prevValues[name],
          value,
          touched: true,
          valid: !!value
        },
      };
    });
  };

  console.log(values, 'values');

  const handleSubmit = () => {
    const sendData = {
      username: values.username.value,
      email: values.email.value,
      password: values.password.value,
    };

    if (isSignUp) {
      dispatch(signUp(sendData));
    } else {
      dispatch(signIn({
        email: values.email.value,
        password: values.password.value,
      }));
    }
  };

  return (
    <View style={styles['auth-form-wrapper']}>
      <BaseTitle size="large" color="primary" weight="bold">
        Sign {isSignUp ? 'Up' : 'In'}
      </BaseTitle>
      <View style={styles['auth-form']}>
        {isSignUp && (
          <FormGroup label="Username">
            <BaseInput
              onChangeText={(value) => handleChange(username, value)}
            />
          </FormGroup>
        )}
        <FormGroup label="E-mail">
          <BaseInput
            onChangeText={(value) => handleChange(email, value)}
          />
        </FormGroup>
        <FormGroup style={{...mixins.margins.marginTop2}} label="Password">
          <BaseInput
            onChangeText={(value) => handleChange(password, value)}
          />
        </FormGroup>
        {isSignUp && (
          <FormGroup style={{...mixins.margins.marginTop2}} label="Confirm Password">
            <BaseInput
              onChangeText={(value) => handleChange(confirmPassword, value)}
            />
          </FormGroup>
        )}
        <BaseButton
          style={styles['auth-form__submit']}
          variant="primary"
          onPress={handleSubmit}
        >
          Sign {isSignUp ? 'Up' : 'In'}
        </BaseButton>
        <Text style={styles['auth-form__switch']} onPress={handleChangeAuthMode}>
          {isSignUp ? 'Already have an account? Sign In.' : 'Don\'t have an account? Sign Up.'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  'auth-form-wrapper': {
    ...mixins.flexStart,
    ...mixins.width75,
    ...mixins.height100,
    padding: sizes.base,
    ...mixins.borders.border2,
    ...mixins.borders.rounded,
    ...mixins.borders.primary,
    maxHeight: 400,
    backgroundColor: colors.whiteOpacity,
  },
  'auth-form': {
    ...mixins.margins.marginTop2,
    flex: 1,
  },
  'auth-form__switch': {
    ...mixins.margins.marginTopAuto,
    ...mixins.textAlignments.center,
    ...mixins.textDecorations.underline,
    color: colors.secondary,
  },
  'auth-form__submit': {
    ...mixins.margins.marginTopAuto,
  },
});

export default AuthForm;
