import { GetterTree } from 'vuex';

// Types
import { IRootState } from '@/store/types';
import { ITheatreState } from '@/store/modules/theatres/types';

const theatreGetters: GetterTree<ITheatreState, IRootState> = {
  theatres(state) {
    console.log(state.theatres, 'state.theatres');
    return state.theatres;
  },
};

export default theatreGetters;