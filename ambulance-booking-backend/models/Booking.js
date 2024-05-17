// models/Booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ambulance: { type: mongoose.Schema.Types.ObjectId, ref: 'Ambulance', required: true },
  bookingTime: { type: Date, default: Date.now },
  status: { type: String, default: 'Booked', enum: ['Booked', 'Completed', 'Cancelled'] },
});

module.exports = mongoose.model('Booking', BookingSchema);
