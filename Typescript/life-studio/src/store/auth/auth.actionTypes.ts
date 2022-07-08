import {GetProfileData, ClearProfileData} from '../profile/profile.actionTypes';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';


export type UserData = {
  email: string;
  name?: string;
  password: string;
  confirmPassword?: string;
  avatar?: string | ArrayBuffer | null
}

export type User = UserData & {
  id: string;
}

export type UserPublicData = {
  id: string;
  email: string;
  name?: string;
  avatar?: string | ArrayBuffer | null;
}

export interface ISignupResponse  {
  name: string;
  email: string;
  id: string;
}

interface ISingInPayload  {
  userData: UserPublicData;
  accessToken: string;
}

interface SignIn {
  type: string;
  payload: ISingInPayload;
}

interface SignUp {
  type: typeof SIGN_UP
}

interface SignOut {
  type: typeof SIGN_OUT
}

export type AuthDispatchTypes = SignIn | SignUp | SignOut | GetProfileData | ClearProfileData;