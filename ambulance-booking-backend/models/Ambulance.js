const mongoose = require('mongoose');

const ambulanceSchema = new mongoose.Schema({
  vehicleNumber: { type: String, required: true },
  driverName: { type: String, required: true },
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Ambulance', ambulanceSchema);