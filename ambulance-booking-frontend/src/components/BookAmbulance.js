import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookAmbulance() {
  const [ambulances, setAmbulances] = useState([]);
  const [selectedAmbulance, setSelectedAmbulance] = useState(null);

  useEffect(() => {
    const fetchAmbulances = async () => {
      const response = await axios.get('http://localhost:5000/api/ambulances');
      setAmbulances(response.data);
    };
    fetchAmbulances();
  }, []);

  const handleBooking = async () => {
    const token = localStorage.getItem('token');
    const userId = JSON.parse(atob(token.split('.')[1])).userId;

    try {
      await axios.post('http://localhost:5000/api/bookings/book', {
        userId,
        ambulanceId: selectedAmbulance,
      }, {
        headers: { Authorization: token },
      });
      alert('Ambulance booked successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Book an Ambulance</h2>
      <select onChange={(e) => setSelectedAmbulance(e.target.value)}>
        <option>Select Ambulance</option>
        {ambulances.map((ambulance) => (
          <option key={ambulance._id} value={ambulance._id}>
            {ambulance.vehicleNumber} - {ambulance.driverName}
          </option>
        ))}
      </select>
      <button onClick={handleBooking}>Book</button>
    </div>
  );
}

export default BookAmbulance;
