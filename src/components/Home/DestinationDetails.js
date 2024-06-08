import React, { useState, useEffect } from "react";
import axios from "axios";
// Import Axios or any other HTTP client library you prefer

const DestinationDetails = ({ city }) => {
  const [details, setDetails] = useState({
    flights: [],
    hotels: [],
    cars: [],
  });

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Replace the placeholders with actual API endpoints and parameters
        const flightsResponse = await axios.get(
          `skyscanner-api/flights?destination=${city}`
        );
        const hotelsResponse = await axios.get(
          `expedia-api/hotels?destination=${city}`
        );
        const carsResponse = await axios.get(
          `rentalcars-api/cars?destination=${city}`
        );

        setDetails({
          flights: flightsResponse.data,
          hotels: hotelsResponse.data,
          cars: carsResponse.data,
        });
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchDetails();
  }, [city.id]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">{city.name} Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Flights</h3>
          <ul>
            {details.flights.map((flight, index) => (
              <li key={index} className="mb-2">
                {flight.name} - {flight.price}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Hotels</h3>
          <ul>
            {details.hotels.map((hotel, index) => (
              <li key={index} className="mb-2">
                {hotel.name} - {hotel.price}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Cars</h3>
          <ul>
            {details.cars.map((car, index) => (
              <li key={index} className="mb-2">
                {car.name} - {car.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
