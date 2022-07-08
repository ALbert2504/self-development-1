import { ActionTree } from 'vuex';

// Types
import { IRootState, User } from '@/store/types';

const rootActions: ActionTree<any, IRootState> = {
  setUser({ commit }, data: User): void {
    localStorage.setItem('user', JSON.stringify(data));

    commit('setUser', data);
  }
};

export default rootActions;