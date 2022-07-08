import { ActionTree } from 'vuex';

// Types
import { IBookingState } from '@/store/modules/bookings/types';
import { IRootState } from '@/store/types';
import { Booking as BookingModel } from "@/models";

// Services
import bookingService from '@/services/booking.service';

const bookingsActions: ActionTree<IBookingState, IRootState> = {
  async createBooking({ commit }, data: BookingModel) {
    try {
      const receivedData = await bookingService.createBooking(data);

      if (!receivedData) {
        throw new Error('Something went wrong.');
      }

      commit('createBooking', receivedData);
    } catch (e) {
      console.log(e);
    }
  },
  async getBookings({ commit }) {
    try {
      const receivedData = await bookingService.getBookings();

      if (!receivedData) {
        throw new Error('Something went wrong.');
      }

      commit('insertBookings', receivedData);
    } catch (e) {
      console.log(e);
    }
  },
  async getMyBookings({ commit, rootGetters }) {
    try {
      if (!rootGetters?.user?.id) {
        return;
      }
      const receivedData = await bookingService.getMyBookings(rootGetters.user.id);

      if (!receivedData) {
        throw new Error('Something went wrong.');
      }

      commit('insertMyBookings', receivedData);
    } catch (e) {
      console.log(e);
    }
  },
  async deleteAllBookings({ commit }) {
    try {
      await bookingService.deleteAllBookings();

      commit('deleteAllBookings');
    } catch (e) {
      console.log(e);
    }
  },
  async submitBooking({ commit }, id: string) {
    try {
      const receivedData = await bookingService.submitBooking(id);

      commit('submitBooking', receivedData);
    } catch (e) {
      console.log(e);
    }
  }
};

export default bookingsActions;