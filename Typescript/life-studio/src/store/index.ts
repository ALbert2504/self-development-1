import {combineReducers} from 'redux';

import authReducer from './auth/auth.reducer';
import profileReducer from './profile/profile.reducer';
import masteryReducer from './mastery/mastery.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  mastery: masteryReducer,
});

export default rootReducer;