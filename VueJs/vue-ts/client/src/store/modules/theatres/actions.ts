import { ActionTree } from 'vuex';

// Types
import { IRootState } from '@/store/types';
import { ITheatreState, Theatre } from '@/store/modules/theatres/types';

// Models
import { Theatre as TheatreModel} from '@/models';

// Services
import theatreService from "@/services/theatre.service";

const theatresActions: ActionTree<ITheatreState, IRootState> = {
  async getTheatres({ commit }) {
    try {
      const receivedData = await theatreService.getTheatres<Theatre>();

      commit('setTheatres', receivedData);
    } catch (e) {
      console.log(e);
    }
  },
  async createTheatre({ commit }, data: TheatreModel) {
    try {
      const receivedData = await theatreService.createTheatre(data);

      commit('insertTheatre', receivedData);
    } catch (e) {
      console.log(e);
    }
  },
  async deleteTheatre({ commit }, id: string) {
    try {
      const receivedData = await theatreService.deleteTheatre(id);

      commit('deleteTheatre', receivedData.id);
    } catch (e) {
      console.log(e);
    }
  }
};

export default theatresActions;