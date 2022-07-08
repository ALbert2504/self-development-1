import mongoose from 'mongoose';

// Models
import { theatreSchema } from './Theatre.js';

const bookingSchema = mongoose.Schema({
  theatreId: String,
  userId: String,
  userEmail: String,
  userName: String,
  bookedTheatre: theatreSchema,
  isSubmitted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date().toISOString(),
  },
});

export default mongoose.model('booking', bookingSchema);