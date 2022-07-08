import axios from 'axios';
import store from 'store';
import {REACT_APP} from "../utils/constants";

// Utils
import request from '../utils/request';

// Types
import { UserData, UserPublicData, ISignupResponse } from '../store/auth/auth.actionTypes';

console.log(process.env);

class Auth {
  #SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env[`${REACT_APP}API_KEY`]}`
  #SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env[`${REACT_APP}API_KEY`]}`

  async signUp(data: UserData): Promise<ISignupResponse | undefined> {
    try {
      const body = {
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      };

      const response = await axios.post(this.#SIGN_UP_URL, body);
      const {data: responseData} = response;
      const {localId}: { localId: string } = responseData;

      store.set('user_id', localId);

      const user: UserPublicData = {
        name: data.name,
        email: data.email,
        id: localId,
      };

      const userData = await Auth.#createUser(user);

      return {
        name: userData.name,
        email: userData.email,
        id: userData.id,
      };
    } catch (e) {
      console.log(e);
    }
  }

  async signIn(data: UserData): Promise<any> {
    try {
      console.log('mtnum es vapshe ystegh?');
      const body = {
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      };

      const response = await axios.post(this.#SIGN_IN_URL, body);
      const {data: responseData} = response;
      const {idToken, localId} = responseData;

      store.set('access_token', idToken);
      store.set('user_id', localId);

      const user = await Auth.#getUser(localId);

      return {
        userData: user,
        accessToken: idToken
      }
    } catch (e: any) {
      console.log(e);
      if (e?.response?.data) {
        alert(e.response.data.error.message);
      }
    }
  }


  static async #getUser(id: string) {
    try {
      const response = await request('GET', `users/${id}.json`);
      return {
        ...response?.data, id
      };
    } catch (e) {
      console.log(e);
    }
  }

  static async #createUser(data: UserPublicData) {
    try {
      const response = await request('PUT', `users/${data.id}.json`, data);

      return response?.data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new Auth;