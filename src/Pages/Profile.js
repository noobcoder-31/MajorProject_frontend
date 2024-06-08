import React, { useState, useEffect } from "react";
import axios from "axios";
import URL from "../URL.js";
import Layout from "../components/Layout/Dashboard";
import UserWidget from "../components/UserWidget";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import { useAuth } from "../Context/AuthProvider";
import { Settings } from "react-feather";
import { Rating } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import toast from "react-hot-toast";

const Profile = () => {
  const [review, setReview] = useState([]);
  const { authUser, logout } = useAuth();
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showRatingDialog, setShowRatingDialog] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [ratingUsername, setRatingUsername] = useState("");

  const user = authUser.data.data;
  const config = {
    headers: {
      Authorization: `Bearer ${authUser.data.token}`,
    },
  };

  const handleRateUser = async () => {
    try {
      // Check if any field is empty
      if (!ratingValue || !reviewText || !ratingUsername) {
        toast.error("Please fill in all fields.");
        return; // Exit function early if any field is empty
      }

      const ratingData = {
        userId: user._id,
        rating: ratingValue,
        reviewText: reviewText,
        username: ratingUsername,
      };

      const response = await axios.post(
        `${URL}/users/review/${user._id}`,
        ratingData,
        config
      );

      if (response.data.success) {
        console.log("Rating submitted successfully!");
        setRatingSubmitted(true);
        setShowRatingDialog(false);
        toast.success("Rating submitted successfully!");
      } else {
        console.error("Failed to submit rating:", response.data.error);
        toast.error("Error submitting rating.");
      }
    } catch (error) {
      console.error("An error occurred while submitting the rating:", error);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${URL}/blog/users/${user.username}`,
          config
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    const fetchUserRating = async () => {
      try {
        const response = await axios.get(
          `${URL}/users/review/${user._id}`,
          config
        );
        console.log(response.data.data);
        setUserRating(response.data.data);
      } catch (error) {
        console.error("Error fetching user rating:", error);
      }
    };

    fetchPosts();
    fetchUserRating();
  }, []);

  const logoutM = (event) => {
    event.preventDefault();
    logout();
  };

  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < reviews.length; i++) {
      const review = reviews[i];
      sum += review.rating;
    }

    const averageRating = sum / reviews.length;
    return averageRating.toFixed(1);
  };

  return (
    <Layout>
      <div className="w-full h-full min-h-screen">
        <div className="profile w-full max-w-screen-xl mx-auto pt-[120px] px-8 flex flex-col-reverse md:flex-row justify-center items-start">
          <div className="w-full max-w-screen-md py-8 pr-0 md:pr-4">
            <PostForm />
            {posts.map((post) => (
              <div key={post._id}>
                <PostList post={post} />
              </div>
            ))}
          </div>
          <div className="w-full md:w-80 mt-12 mb-4 bg-gray-50 flex flex-wrap justify-center items-center rounded-lg shadow-lg">
            <UserWidget
              username={user.username}
              email={user.email}
              fullname={user.fullname}
              photo={user.photo}
              location={user.location}
            />
            <div className="w-full flex justify-start pb-4 px-4">
              <button className="btn" onClick={() => setShowModal(true)}>
                <div className="w-full h-full inline-flex items-center font-normal">
                  <Settings width={13} className="mr-1" />
                  Update Profile
                </div>
              </button>
              <button className="btn ml-2" onClick={logoutM}>
                Logout
              </button>
            </div>
            {user.isadmin ? (
              <div>
                <button
                  className="btn ml-2 pb-4 px-4 mr-48 mb-2"
                  onClick={() => setShowRatingDialog(true)}
                >
                  Rate User
                </button>
                <Dialog
                  open={showRatingDialog}
                  onClose={() => setShowRatingDialog(false)}
                >
                  <DialogTitle>Rate User</DialogTitle>
                  <DialogContent>
                    <div className="mb-4">
                      <label htmlFor="rating" className="block mb-2">
                        Rating:
                      </label>
                      <Rating
                        value={ratingValue}
                        onChange={(event, newValue) => setRatingValue(newValue)}
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="review" className="block mb-2">
                        Review:
                      </label>
                      <textarea
                        id="review"
                        rows="3"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="username" className="block mb-2">
                        Username:
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={ratingUsername}
                        onChange={(e) => setRatingUsername(e.target.value)}
                      />
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <button
                      className="btn mr-2 hover:bg-blue-200"
                      onClick={() => setShowRatingDialog(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn text-black hover:bg-blue-200"
                      onClick={handleRateUser}
                    >
                      Submit
                    </button>
                  </DialogActions>
                </Dialog>
              </div>
            ) : (
              <div className="w-full flex flex-col justify-center items-center mt-4">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-semibold mr-2">
                    User Rating:
                  </span>
                  <span className="text-lg font-bold">
                    ({calculateAverageRating(userRating)})
                  </span>
                </div>
                <Rating value={calculateAverageRating(userRating)} readOnly />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
