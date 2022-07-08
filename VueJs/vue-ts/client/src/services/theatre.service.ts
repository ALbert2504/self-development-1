import request from '@/utils/request';

import { ITheatreData } from '@/services/types/theatreTypes';
import { Theatre } from '@/models';

class TheatreService {
  async getTheatres<T>(): Promise<T[] | void> {
    try {
      const response = await request<ITheatreData>('GET', 'theatres/get');

      if (!response?.data?.success) {
        throw new Error('Something went wrong');
      }

      const { data } = response;

      console.log(data);

      return data.data.theatres;
    } catch (e) {
      console.log(e);
    }
  }

  async createTheatre(data: Theatre): Promise<Theatre | void> {
    try {
      const response = await request<ITheatreData>('POST', 'theatres/create', data);

      if (!response?.data?.success) {
        throw new Error('Something went wrong');
      }

      const { data: responseData } = response;


      return responseData.data.theatre;
    } catch (e) {
      console.log(e);
    }
  }

  async deleteTheatre(id: string): Promise<any | void> {
    try {
      const response = await request<ITheatreData>('DELETE', `theatres/delete/${id}`);

      if (!response?.data?.success) {
        throw new Error('Something went wrong');
      }

      const { data: responseData } = response;

      console.log(responseData);

      return responseData.data.deletedTheatre;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new TheatreService();