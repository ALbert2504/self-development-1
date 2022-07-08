import store from 'store';
import {Dispatch} from 'redux';
import {AxiosError} from 'axios';

// Types
import {AuthDispatchTypes, SIGN_IN, SIGN_OUT, UserData, UserPublicData,} from './auth.actionTypes';

import {
  GET_PROFILE_DATA,
  CLEAR_PROFILE_DATA,
} from '../profile/profile.actionTypes';

// Services
import auth from '../../services/auth.service';

export const signUp = (data: UserData) => async (dispatch: Dispatch<AuthDispatchTypes>) => {
  try {
    const userData = await auth.signUp(data);

    alert('User created successfully.');
  } catch (e) {
    console.log(e);
  }
};

export const signIn = (data: UserData) => async (dispatch: Dispatch<AuthDispatchTypes>) => {
  try {
    const {userData, accessToken} = await auth.signIn(data);

    store.set('user', userData);

    dispatch({
      type: SIGN_IN,
      payload: {
        userData,
        accessToken
      }
    });

    dispatch({
      type: GET_PROFILE_DATA,
      payload: {
        userData,
      }
    })
  } catch (e) {
    console.log(e);
  }
};

export const signOut = () => (dispatch: Dispatch<AuthDispatchTypes>) => {
  store.remove('user_id');
  store.remove('user');
  store.remove('access_token');

  dispatch({
    type: SIGN_OUT,
  });

  dispatch({
    type: CLEAR_PROFILE_DATA,
  })
};
