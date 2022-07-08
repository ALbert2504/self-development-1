import Booking from '../models/Booking.js';
import Theatre from '../models/Theatre.js';

export const createBooking = async (req, res) => {
  try {
    const {
      userId,
      body: {
        theatreId,
        userEmail,
        userName,
      },
    } = req;

    if (!userId) {
      return res.status(401).json({
        message: 'You don\'t have ID',
        success: false,
      });
    }

    const bookedTheatre = await Theatre.findOne({ _id: theatreId });

    const newBooking = new Booking({
      userId,
      theatreId,
      bookedTheatre,
      userName,
      userEmail,
    });

    await newBooking.save();

    res.status(201).json({
      success: true,
      data: {
        booking: newBooking,
      },
      message: 'You have successfully booked the play. See you soon <3',
    });

  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Something went wrong',
      e,
    });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      data: {
        bookings,
      },
      success: true,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Something went wrong',
      e,
    });
  }
};

export const getCurrentUserBookings = async (req, res) => {
  try {
    const { userId } = req.params;

    const bookings = await Booking.find({userId}).sort({ createdAt: -1 });
    res.status(200).json({
      data: {
        bookings,
      },
      success: true,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Something went wrong',
      e,
    });
  }
};

export const deleteAllBookings = async (req, res) => {
    try {
      await Booking.remove({});

      res.status(200).json({
        message: 'All the bookings have successfully been removed.',
        success: true,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: 'Something went wrong',
        e,
      });
    }
};

export const submitBooking = async (req, res) => {
  try {
    console.log('mtnum a');
    const { id } = req.params;
    console.log(id, 'id');
    await Booking.findOneAndUpdate({ _id: id }, { isSubmitted: true });

    const booking = await Booking.findOne({ _id: id });

    res.status(200).json({
      success: true,
      data: {
        bookingId: booking._id,
      },
      message: 'Booking has successfully been submitted.',
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Something went wrong',
      e,
    });
  }
}