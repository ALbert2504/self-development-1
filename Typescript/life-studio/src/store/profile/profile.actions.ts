import {Dispatch} from 'redux';
import store from 'store';

// Services
import profile from '../../services/profile.service';

// Action Types
import {EDIT_PROFILE_DATA} from './profile.actionTypes';

// Types
import {ProfileActionTypes, ProfileData, EditingData} from './profile.actionTypes';

export const getProfileData = (id: string) => async (dispatch: Dispatch<ProfileActionTypes>) => {
  try {
    const response = await profile.getProfileData(id);
  } catch (e) {
    console.log(e);
  }
};

export const editProfileData = (id: string, data: EditingData) => async (dispatch: Dispatch<ProfileActionTypes>) => {
  try {
    const response = await profile.editProfile(id, data);

    const newUser: ProfileData = {
      id,
      ...response,
    };

    store.set('user', newUser);

    dispatch({
      type: EDIT_PROFILE_DATA,
      payload: {
        userData: newUser,
      },
    });
  } catch (e) {
    console.log(e);
  }
};