// ambulance-booking-backend/seed.js
const mongoose = require('mongoose');
const Ambulance = require('./models/Ambulance');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const seedAmbulances = async () => {
  try {
    await Ambulance.deleteMany({});
    const ambulances = [
      { vehicleNumber: 'AB1234', driverName: 'John Doe', available: true },
      { vehicleNumber: 'CD5678', driverName: 'Jane Smith', available: true },
    ];
    await Ambulance.insertMany(ambulances);
    console.log('Ambulances seeded');
  } catch (error) {
    console.error('Error seeding ambulances:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedAmbulances();
