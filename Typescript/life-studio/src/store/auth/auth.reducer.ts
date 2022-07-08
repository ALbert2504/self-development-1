import store from 'store';

// Action Types
import {
  SIGN_IN,
  SIGN_OUT,

  AuthDispatchTypes,
  UserPublicData
} from "./auth.actionTypes";


interface IInitialState {
  user: UserPublicData | null;
  accessToken: string | null;
}

const initialState: IInitialState = {
  user: store.get('user'),
  accessToken: store.get('access_token'),
};

const authReducer = (state: IInitialState = initialState, action: AuthDispatchTypes): IInitialState => {
  switch (action.type) {
    case SIGN_IN:
      return {
        user: action.payload.userData,
        accessToken: action.payload.accessToken,
      };
    case SIGN_OUT:
      return {
        user: null,
        accessToken: null,
      };
    default:
      return state;
  }
}

export default authReducer;