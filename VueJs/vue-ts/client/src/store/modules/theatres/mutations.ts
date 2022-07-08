import { MutationTree } from 'vuex';

// Types
import { ITheatreState, Theatre } from '@/store/modules/theatres/types';

const theatreMutations: MutationTree<ITheatreState> = {
  setTheatres(state, payload: Theatre[]) {
    state.theatres = payload;
  },
  insertTheatre(state, payload: Theatre) {
    state.theatres.push(payload);
  },
  deleteTheatre(state, payload: string) {
    state.theatres = state.theatres.filter((theatre) => theatre._id !== payload);
  }
};

export default theatreMutations;