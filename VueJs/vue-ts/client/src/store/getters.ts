import { GetterTree } from 'vuex';
import { IRootState, User } from "@/store/types";

const rootGetters: GetterTree<any, IRootState> = {
  user(state): User {
    return state.user;
  },
};

export default rootGetters;