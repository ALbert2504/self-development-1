import { MutationTree } from 'vuex';

// Types
import { IBookingState, Booking } from '@/store/modules/bookings/types';

const bookingsMutations: MutationTree<IBookingState> = {
  createBooking(state, payload: Booking) {
    state.myBookings.push(payload);
  },
  insertBookings(state, payload) {
    state.bookings = payload;
  },
  insertMyBookings(state, payload) {
    state.myBookings = payload;
  },
  deleteAllBookings(state) {
    state.bookings = [];
  },
  submitBooking(state, id) {
    const foundBooking = state.bookings.find((booking) => booking._id === id);

    if (!foundBooking) {
      return;
    }

    foundBooking.isSubmitted = true;
  }
};

export default bookingsMutations;