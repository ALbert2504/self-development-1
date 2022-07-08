import mongoose from 'mongoose';

export const theatreSchema = mongoose.Schema({
  name: String,
  image: String,
  date: Date,
  createdAt: {
    type: String,
    default: new Date().toISOString(),
  },
});

export default mongoose.model('theatre', theatreSchema);