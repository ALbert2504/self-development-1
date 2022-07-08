export const GET_PROFILE_DATA = 'GET_PROFILE_DATA';
export const EDIT_PROFILE_DATA = 'EDIT_PROFILE_DATA';
export const CLEAR_PROFILE_DATA = 'CLEAR_PROFILE_DATA';

export type EditingData = {
  email: string
  name: string
  avatar: string | ArrayBuffer | null
}

export type ProfileData = EditingData & {
  id: string
}

export interface GetProfileData {
  type: typeof GET_PROFILE_DATA
  payload: {
    userData: ProfileData
  }
}

interface EditProfileData {
  type: typeof EDIT_PROFILE_DATA
  payload: {
    userData: ProfileData
  }
}

export interface ClearProfileData {
  type: typeof CLEAR_PROFILE_DATA
}

export type ProfileActionTypes = GetProfileData | EditProfileData | ClearProfileData;