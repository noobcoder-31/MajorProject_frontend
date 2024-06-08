import React, { useState, useEffect } from "react";
import axios from "axios";
import URL from "../URL.js";
import PackageDetailsPage from "./PackageDetailsPage.js";
import HotelIcon from "@mui/icons-material/Hotel";
import { CurrencyRupee } from "@mui/icons-material";
import calculateWeightedRating from "./WeightedRating.js";

const TourList = ({ onSelectTour }) => {
  const [tours, setTours] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Example usage
  const min = 4000;
  const max = 7000;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/tours`);
        setTours(response.data.data);
        console.log("Fetched tours:", response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleTourSelect = (tour) => {
    console.log("Selected tour:", tour);
    setSelectedTour(tour);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredTours =
    selectedCategory === "all"
      ? tours
      : tours.filter((tour) => tour.category === selectedCategory);

  console.log("Selected tour state:", selectedTour);

  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const rating = calculateWeightedRating;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };

  return (
    <div className="tour-container mt-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {!selectedTour && (
        <>
          <h1 className="text-3xl font-bold mb-6 text-center">
            Explore Amazing Tours
          </h1>
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 rounded-l transition-colors duration-300 ${
                selectedCategory === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleCategorySelect("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 transition-colors duration-300 ${
                selectedCategory === "Hill Station"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleCategorySelect("Hill Station")}
            >
              Hill Station
            </button>
            <button
              className={`px-4 py-2 transition-colors duration-300 ${
                selectedCategory === "Natural Site"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleCategorySelect("Natural Site")}
            >
              Nature
            </button>
            <button
              className={`px-4 py-2 transition-colors duration-300 ${
                selectedCategory === "Beach"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleCategorySelect("Beach")}
            >
              Beaches
            </button>
            <button
              className={`px-4 py-2 transition-colors duration-300 ${
                selectedCategory === "Pilgrimage"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleCategorySelect("Pilgrimage")}
            >
              Pilgrimage
            </button>
            <button
              className={`px-4 py-2 rounded-r transition-colors duration-300 ${
                selectedCategory === "City Tours"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleCategorySelect("City Tours")}
            >
              City Tours
            </button>
          </div>
        </>
      )}
      {selectedTour ? (
        <PackageDetailsPage tour={selectedTour} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredTours.map((tour, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <img
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                src={tour.images[0]}
                alt={tour.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                <p className="text-gray-700 mb-4">{tour.shortdescription}</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-600 flex items-center">
                    <CurrencyRupee className="mr-2" /> Cost: ₹{" "}
                    {getRandomNumber(min, max)} {tour.costPerPerson}
                  </p>

                  <div className="flex items-center">
                    <span className="mr-2 text-gray-600">
                      {calculateAverageRating(tour.reviews)}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`h-4 w-4 ${
                            index <
                            Math.floor(calculateAverageRating(tour.reviews))
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  className="px-6 py-3 bg-blue-500 text-white rounded transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
                  onClick={() => handleTourSelect(tour)}
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TourList;
