import { GetterTree } from 'vuex';

import { IRootState } from '@/store/types';
import { IBookingState, Booking } from '@/store/modules/bookings/types';

const bookingsGetters: GetterTree<IBookingState, IRootState> = {
  bookings(state): Booking[] {
    return state.bookings;
  },
  myBookings(state): Booking[] {
    return state.myBookings;
  },
};

export default bookingsGetters;