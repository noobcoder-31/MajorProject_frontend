import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHigh, faTint } from "@fortawesome/free-solid-svg-icons";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Tooltip } from "@mui/material";

const WeatherWidget = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5448d640821549d75fb1356b66569db0&units=metric`
      ); // Replace YOUR_API_KEY with your OpenWeatherMap API key
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md mt-24">
      <h2 className="text-3xl font-semibold mb-4">Weather Forecast</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-lg font-medium text-gray-700"
          >
            Location:
          </label>
          <input
            type="text"
            id="location"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 w-full"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-lg font-medium text-gray-700"
          >
            Date:
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Get Weather
        </button>
      </form>
      {isLoading ? (
        <p className="text-gray-600 text-center mt-4 text-lg">Loading...</p>
      ) : weatherData ? (
        <div className="flex items-center justify-center mt-4">
          <div className="mr-8">
            <Tooltip title="Temperature">
              <FontAwesomeIcon
                icon={faTemperatureHigh}
                className="text-blue-500"
                size="3x"
              />
            </Tooltip>
            <span className="ml-2 text-2xl">
              {weatherData.main.temp}&#176;C
            </span>
          </div>
          <div>
            <Tooltip title="Humidity">
              <FontAwesomeIcon
                icon={faTint}
                className="text-blue-500"
                size="3x"
              />
            </Tooltip>
            <span className="ml-2 text-2xl">{weatherData.main.humidity}%</span>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center mt-4 text-lg">
          No weather data available
        </p>
      )}
    </div>
  );
};

export default WeatherWidget;
