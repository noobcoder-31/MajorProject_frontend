import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ImageIcon from "@mui/icons-material/Image";
import Tooltip from "@mui/material/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const Reviews = () => {
  // Dummy review data
  const reviews = [
    {
      id: 1,
      username: "John Doe",
      reviewText:
        "I had an amazing experience planning my trip to New York, USA using this website. The recommendations were spot on and made my visit unforgettable!",
      rating: 4,
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      location: "New York, USA",
    },
    {
      id: 2,
      username: "Jane Smith",
      reviewText:
        "Thanks to this website, my trip to Paris, France was a dream come true! The travel tips provided were invaluable, and I discovered hidden gems that I wouldn't have found otherwise.",
      rating: 5,
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
      location: "Paris, France",
    },
    {
      id: 3,
      username: "Alice John",
      reviewText:
        "Planning my vacation to Tokyo, Japan was a breeze with this website. The detailed itineraries and insider recommendations helped me make the most of my time there.",
      rating: 4,
      photo: "https://randomuser.me/api/portraits/women/3.jpg",
      location: "Tokyo, Japan",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 ml-10">
        Reviews
      </h2>
      <div className="flex flex-nowrap space-x-6 overflow-x-auto">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-gray-100 border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.photo}
                alt={review.username}
                className="h-10 w-10 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{review.username}</h3>
                <div className="flex items-center text-gray-500">
                  <LocationOnIcon fontSize="small" />
                  <span className="ml-1">{review.location}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="flex items-center mr-2">
                {[...Array(review.rating)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={fasStar}
                    className="h-5 w-5 text-yellow-400"
                  />
                ))}
                {[...Array(5 - review.rating)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={farStar}
                    className="h-5 w-5 text-gray-300"
                  />
                ))}
              </div>
              <span className="text-gray-600 ml-2">{review.rating} stars</span>
            </div>
            <p className="text-gray-700 mb-4">{review.reviewText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
