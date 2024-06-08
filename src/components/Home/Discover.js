import React, { useEffect, useState } from "react";
import DiscoverData from "./Data/Discover-Data";
import DestinationDetails from "./DestinationDetails";
import axios from "axios";
import URL from "../../URL";
import PackageDetailsPage from "../../Pages/PackageDetailsPage"; // Import the new component

const Discover = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null); // State to manage selected tour

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/tours`);
        setDestinations(response.data.data.slice(0, 9));
        console.log("Fetched destinations:", response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to handle click on image
  const handleImageClick = (tour) => {
    setSelectedTour(tour); // Set selected tour when image is clicked
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Destinations
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((city) => (
            <div
              key={city.id}
              className="relative rounded-lg overflow-hidden bg-white shadow-md"
              onClick={() => handleImageClick(city)} // Call handleImageClick on image click
            >
              <img
                src={city.images[0]}
                alt={city.name}
                className="w-full h-64 object-cover object-center cursor-pointer" // Add cursor-pointer for indicating clickable
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-xl font-semibold">{city.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedTour && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="max-w-md bg-white p-8 rounded-lg">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedTour(null)} // Close button to reset selectedTour state
            >
              Close
            </button>
            <PackageDetailsPage tour={selectedTour} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Discover;
