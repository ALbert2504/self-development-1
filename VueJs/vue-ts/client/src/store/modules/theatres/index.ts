import { Module } from 'vuex';

// Types
import { IRootState } from '@/store/types';
import { ITheatreState } from '@/store/modules/theatres/types';

// Pieces
import theatresActions from '@/store/modules/theatres/actions';
import theatreMutations from '@/store/modules/theatres/mutations';
import theatreGetters from '@/store/modules/theatres/getters';

const theatresModule: Module<ITheatreState, IRootState> = {
  namespaced: true,
  state() {
    return {
      theatres: [],
    };
  },

  actions: theatresActions,
  mutations: theatreMutations,
  getters: theatreGetters,
}

export default theatresModule;