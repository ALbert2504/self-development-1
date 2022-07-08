import request from '../utils/request';

// Types
import {EditingData} from "../store/profile/profile.actionTypes";


class Profile {
  #endpoint = 'users'

  async editProfile(id: string, userData: EditingData) {
    const url = `${this.#endpoint}/${id}.json`;

    try {
      console.log(userData, 'userData');
      const response = await request('PUT', url, userData);

      if (!response?.data) {
        throw new Error('Something went wrong.');
      }

      const {data} = response;
      console.log(data, 'edit data');

      return data;

    } catch (e) {
      console.log(e);
    }
  }

  async getProfileData(id: string) {
    const url = `${this.#endpoint}/${id}.json`;

    try {
      const response = await request('GET', url);

      if(!response?.data) {
        throw new Error('Something went wrong.');
      }

      const {data} = response;
      console.log(data, 'data/getProfileData');

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new Profile;