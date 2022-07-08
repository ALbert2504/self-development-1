import { createAction } from '@reduxjs/toolkit';

// Types
import {
  SET_USER,
} from './user.actionTypes';


export const setUser = createAction(SET_USER);
