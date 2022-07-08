import { createStore } from 'vuex';

// Modules
import theatresModule from '@/store/modules/theatres';
import bookingsModule from '@/store/modules/bookings';

// Types
import { IRootState, User } from "@/store/types";

// Pieces
import rootGetters from '@/store/getters';
import rootActions from '@/store/actions';
import rootMutations from '@/store/mutations';


const store = createStore<IRootState>({
  state() {
    return {
      user: JSON.parse(localStorage.getItem('user') || 'null') as User | null,
    };
  },

  modules: {
    theatres: theatresModule,
    bookings: bookingsModule,
  },

  getters: rootGetters,
  actions: rootActions,
  mutations: rootMutations,
});

export default store;