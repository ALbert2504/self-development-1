import { useToast } from 'vue-toastification';

// Utils
import request from "@/utils/request";

// Types and Models
import { Booking } from '@/models';
import { IBookingData } from '@/services/types/bookingTypes';
import { Booking as BookingType } from '@/store/modules/bookings/types';

const toast = useToast();

class BookingService {
  async createBooking(bookingData: Booking): Promise<BookingType | void> {
    try {
      const response = await request<IBookingData, Booking>('POST','bookings/create', bookingData);

      if (!response?.data?.success) {
        throw new Error('Something went wrong.');
      }

      const { data } = response;

      toast.success(data.message, {
        timeout: 2000,
      });

      return data.data.booking;
    } catch (e) {
      console.log(e);
    }
  }

  async getBookings(): Promise<BookingType[] | void> {
    try {
      const response = await request<IBookingData>('GET', 'bookings/get');

      if (!response?.data?.success) {
        throw new Error('Something went wrong.');
      }

      const { data } = response;

      return data.data.bookings;
    } catch (e) {
      console.log(e);
    }
  }

  async getMyBookings(userId: string): Promise<BookingType[] | void> {
    try {
      const response = await request<IBookingData>('GET', `bookings/get/${userId}`);

      if (!response?.data?.success) {
        throw new Error('Something went wrong.');
      }

      const { data } = response;

      return data.data.bookings;
    } catch (e) {
      console.log(e);
    }
  }

  async deleteAllBookings(): Promise<void> {
    try {
      const response = await request<IBookingData>('DELETE', 'bookings/delete');

      if (!response?.data?.success) {
        throw new Error('Something went wrong.');
      }

      const { data } = response;

      toast.success(data.message, {
        timeout: 2000,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async submitBooking(id: string): Promise<BookingType | void> {
    try {
      const response = await request<IBookingData>('POST', `bookings/submit/${id}`);

      if (!response?.data?.success) {
        throw new Error('Something went wrong.');
      }

      const { data } = response;

      toast.success(data.message, {
        timeout: 2000,
      });

      return data.data.bookingId;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new BookingService();