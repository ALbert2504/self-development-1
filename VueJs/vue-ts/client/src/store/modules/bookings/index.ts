import { Module } from 'vuex';

// Types
import { IBookingState } from '@/store/modules/bookings/types';
import { IRootState } from '@/store/types';

// Pieces
import bookingsActions from '@/store/modules/bookings/actions';
import bookingsMutations from '@/store/modules/bookings/mutations';
import bookingsGetters from '@/store/modules/bookings/getters';

const bookingsModule: Module<IBookingState, IRootState> = {
  namespaced: true,
  state() {
    return {
      bookings: [],
      myBookings: [],
    };
  },

  actions: bookingsActions,
  mutations: bookingsMutations,
  getters: bookingsGetters,
};

export default bookingsModule;