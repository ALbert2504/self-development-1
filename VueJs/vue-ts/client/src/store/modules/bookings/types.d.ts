import { Theatre } from '@/store/modules/theatres/types';

export type Booking = {
  _id: string;
  theatreId: string;
  bookedTheatre: Theatre;
  userId: string;
  userEmail: string;
  userName: string;
  createdAt: string;
  isSubmitted: boolean;
};

interface IBookingState {
  bookings: Booking[];
  myBookings: Booking[];
}