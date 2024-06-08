import React, { useEffect, useState } from "react";
import axios from "axios";
import URL from "../URL.js";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [numPassengers, setNumPassengers] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/tours/${id}`);
        setTour(response.data.data);
        console.log("Fetched tour:", response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleHotelChange = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handlePassengerChange = (e) => {
    setNumPassengers(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const calculateEstimatedPrice = () => {
    if (!selectedHotel) return 0;
    const hotelCost = selectedHotel.cost * numPassengers;
    //const tourCost = tour?.costPerPerson * numPassengers;
    return hotelCost + 450 + 7500;
  };

  const estimatedPrice = calculateEstimatedPrice();

  return (
    <div className="flex justify-center items-center h-screen mt-10">
      <div className="booking-form bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Book Your Tour</h2>
        <h2 className="text-2xl font-bold mb-6 text-center">
          {tour?.name || "Loading..."}
        </h2>
        <div className="form-group mb-4">
          <label htmlFor="hotel" className="block font-semibold mb-2">
            Select Hotel:
          </label>
          <select
            id="hotel"
            className="form-control border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedHotel ? selectedHotel.name : ""}
            onChange={(e) =>
              handleHotelChange(
                tour?.hotels?.find((hotel) => hotel.name === e.target.value)
              )
            }
          >
            <option value="">Select a hotel</option>
            {tour?.hotels?.map((hotel) => (
              <option key={hotel.name} value={hotel.name}>
                {hotel.name} (₹{hotel.cost} per night)
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="numPassengers" className="block font-semibold mb-2">
            Number of Passengers:
          </label>
          <input
            type="number"
            id="numPassengers"
            className="form-control border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={numPassengers}
            onChange={handlePassengerChange}
            min="1"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="startDate" className="block font-semibold mb-2">
            Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            className="form-control border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="endDate" className="block font-semibold mb-2">
            End Date:
          </label>
          <input
            type="date"
            id="endDate"
            className="form-control border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
        <div className="estimated-price mb-6 text-center">
          <h3 className="text-lg font-semibold">Estimated Price:</h3>
          <p className="text-2xl font-bold">₹{estimatedPrice.toFixed(2)}</p>
        </div>
        <div className="footer text-center">
          <button className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
