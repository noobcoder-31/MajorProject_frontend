import React, { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

const LikeButton = ({ post: { _id, likeCount, likes } }) => {
  const [liked, setLiked] = useState(false);

  // Simulate fetching user data (assuming user is logged in)
  const user = {
    username: "example_user", // Sample logged-in user
  };

  useEffect(() => {
    // Check if the logged-in user has already liked the post
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [user, likes]);

  const handleLike = () => {
    // Toggle the liked state locally (simulate toggling the like status)
    setLiked(!liked);
  };

  // Determine the heart icon based on whether the post is liked or not
  const likeButton = liked ? (
    <HeartIcon className="liked-heart" />
  ) : (
    <HeartIcon className="unliked-heart" />
  );

  return (
    <div className="flex items-center">
      <button className="like-btn" onClick={handleLike}>
        {likeButton}
        {likeCount} {likeCount === 1 ? "like" : "likes"}
      </button>
    </div>
  );
};

export default LikeButton;
