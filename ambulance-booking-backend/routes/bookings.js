// routes/bookings.js
const express = require('express');
const Booking = require('../models/Booking');
const Ambulance = require('../models/Ambulance');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

// Book an ambulance
router.post('/book', verifyToken, async (req, res) => {
  const { userId, ambulanceId } = req.body;
  try {
    const ambulance = await Ambulance.findById(ambulanceId);
    if (!ambulance || !ambulance.available) {
      return res.status(400).send('Ambulance not available');
    }

    const booking = new Booking({ user: userId, ambulance: ambulanceId });
    await booking.save();

    ambulance.available = false;
    await ambulance.save();

    res.status(201).send('Ambulance booked');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get user bookings
router.get('/user/:userId', verifyToken, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.params.userId }).populate('ambulance');
    res.json(bookings);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
