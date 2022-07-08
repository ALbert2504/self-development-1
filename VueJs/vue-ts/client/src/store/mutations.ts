import { MutationTree } from 'vuex';

// Types
import { IRootState, User } from '@/store/types';

const rootMutations: MutationTree<IRootState> = {
  setUser(state, payload: User) {
    state.user = payload;
  }
};

export default rootMutations;