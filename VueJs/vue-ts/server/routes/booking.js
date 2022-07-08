import express from 'express';

// Middlewares
import auth from '../middlewares/auth.js';

// Controllers
import {
  createBooking,
  getBookings,
  getCurrentUserBookings,
  deleteAllBookings,
  submitBooking,
} from '../controllers/booking.js';

const bookingRouter = express.Router();

bookingRouter.post('/create', auth, createBooking);
bookingRouter.get('/get', auth, getBookings);
bookingRouter.get('/get/:userId', auth, getCurrentUserBookings);
bookingRouter.delete('/delete', auth, deleteAllBookings);
bookingRouter.post('/submit/:id', auth, submitBooking);

export default bookingRouter;