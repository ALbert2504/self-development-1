import store from "store";

// Types
import {ProfileActionTypes, ProfileData} from './profile.actionTypes';

// Action Types
import {EDIT_PROFILE_DATA, GET_PROFILE_DATA, CLEAR_PROFILE_DATA} from './profile.actionTypes';

interface InitialStateI {
  profileData: ProfileData | null
}

const initialState: InitialStateI = {
  profileData: store.get('user'),
};

const profileReducer = (state: InitialStateI = initialState, action: ProfileActionTypes): InitialStateI => {
  switch (action.type) {
    case EDIT_PROFILE_DATA:
    case GET_PROFILE_DATA:
      return {
        ...state,
        profileData: action.payload.userData,
      };
    case CLEAR_PROFILE_DATA:
      return {
        ...state,
        profileData: null,
      };
    default:
      return state;
  }
};

export default profileReducer;