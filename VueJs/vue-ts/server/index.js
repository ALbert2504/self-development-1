import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// Routes
import theatreRouter from './routes/theatre.js';
import bookingRouter from './routes/booking.js';

dotenv.config();

const app = express();


// Packages
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

// Routes
app.use('/theatres', theatreRouter);
app.use('/bookings', bookingRouter);


app.get('/', (req, res) => {
  res.send('App is running');
});


const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
  });

// node v17.8.0 (npm v8.5.5)