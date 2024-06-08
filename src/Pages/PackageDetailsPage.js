import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import ImageIcon from "@mui/icons-material/Image";
import Tooltip from "@mui/material/Tooltip";
import { StarIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Link } from "react-router-dom";
import axios from "axios";
import URL from "../URL";
import { useAuth } from "../Context/AuthProvider";
import toast from "react-hot-toast";

const PackageDetailsPage = ({ tour }) => {
  const { authUser } = useAuth();
  const totalCost =
    tour.hotels.reduce((acc, hotel) => acc + hotel.cost, 0) +
    tour.costPerPerson;

  const [rating, setRating] = useState(0);
  const { isLoggedIn } = useAuth();
  const [review, setReview] = useState("");
  const [existingRating, setExistingRating] = useState(tour.reviews.rating);
  const [existingReview, setExistingReview] = useState(tour.reviews.review);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };
  console.log("Helllllo ", authUser);
  const config = {
    headers: {
      Authorization: `Bearer ${authUser.token}`,
    },
  };
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleRatingChange(i)}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon
            icon={i <= rating ? fasStar : farStar}
            color={i <= rating ? "#ffc107" : "#e4e5e9"}
            size="lg"
          />
        </span>
      );
    }
    return stars;
  };
  const handleSubmitReview = async () => {
    try {
      const response = await axios.post(
        `${URL}/review/${tour._id}`,
        {
          rating: rating,
          reviewText: review,
          tourId: tour._id,
          username: authUser.data.data.username,
        },
        config
      );
      toast.success("Review added successfully");
      console.log("Review submitted successfully:", response.data);
      setRating(0);
      setReview("");
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">{tour.name}</h2>
      <p className="text-gray-700 mb-8 text-center">{tour.description}</p>
      <div className="mb-8">
        <h3 className="text-xl font-semibold flex items-center mb-4">
          <ImageIcon className="mr-2" /> Tour Images
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {tour.images.map((image, index) => (
            <Tooltip title={`Image ${index + 1}`} key={index}>
              <img
                src={image}
                alt={`Tour Image ${index}`}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </Tooltip>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold flex items-center mb-4">
          <LocationOnIcon className="mr-2" /> Attractions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tour.attractions.map((attraction, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 transition-transform duration-300 hover:-translate-y-2"
            >
              <h4 className="text-lg font-semibold mb-2">{attraction.name}</h4>
              <p className="text-gray-700 mb-4">{attraction.description}</p>
              <img
                src={attraction.images}
                alt={attraction.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold flex items-center mb-4">
          <HotelIcon className="mr-2" /> Hotels
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tour.hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 transition-transform duration-300 hover:-translate-y-2"
            >
              <h4 className="text-lg font-semibold mb-2">{hotel.name}</h4>
              <p className="text-gray-700 mb-4">
                Cost: ₹{hotel.cost} per night
              </p>
              <img
                src={hotel.images}
                alt={hotel.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-xl font-semibold mb-4">
          Total Cost: ₹{totalCost.toFixed(2)}
        </p>
        {isLoggedIn ? (
          <Link
            to={`/book/${tour?._id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Book Now
          </Link>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Log in to Book Now
          </Link>
        )}
      </div>
      {isLoggedIn && (
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Share Your Experience
          </h3>
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <span className="mr-2 text-lg font-semibold">Rating:</span>
              {renderStars()}
            </div>
            <textarea
              className="w-full rounded-lg p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Write your review..."
              value={review}
              onChange={handleReviewChange}
            ></textarea>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg mt-4 transition-colors duration-300"
              onClick={handleSubmitReview}
            >
              Submit Review
            </button>
          </div>
        </div>
      )}
      {/* Existing Rating and Review Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-center">Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tour.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.photo}
                  alt={review.username}
                  className="h-10 w-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold">{review.username}</h4>
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
                <span className="text-gray-600 ml-2">
                  {review.rating} stars
                </span>
              </div>
              <p className="text-gray-700">{review.reviewText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsPage;
