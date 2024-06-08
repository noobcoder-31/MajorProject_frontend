import React, { useState } from "react";
import { X } from "react-feather";

const CommentForm = ({ postId }) => {
  const [showModal, setShowModal] = useState(false);
  const [commentBody, setBody] = useState("");
  const [comments, setComments] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (commentBody.trim() === "") return; // Prevent submitting empty comments

    // Create a new comment object
    const newComment = {
      id: comments.length + 1, // You can use a unique identifier like an incrementing ID
      postId,
      body: commentBody,
      createdAt: new Date().toISOString(), // You can use libraries like moment.js for better date formatting
    };

    // Update the comments state with the new comment
    setComments([...comments, newComment]);

    // Clear the comment body
    setBody("");

    // Close the modal
    setShowModal(false);
  };

  return (
    <div className="comment-form my-8 w-full max-w-md">
      <input
        placeholder="Write a comment..."
        onClick={() => setShowModal(true)}
        className="input"
      />
      {showModal && (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-lg shadow-lg">
                <div
                  className="mb-4 flex justify-end items-center text-gray-400 hover:text-teal-300 hover:cursor-pointer transition-all ease-in duration-300"
                  onClick={() => setShowModal(false)}
                >
                  <X width={25} className="inline-flex items-center" />
                </div>
                <h1 className="text-3xl">Add a Comment</h1>
                <form
                  className="w-full px-4 pb-2 flex flex-col justify-center"
                  onSubmit={handleFormSubmit}
                >
                  <textarea
                    placeholder="Write a comment..."
                    value={commentBody}
                    onChange={(e) => setBody(e.target.value)}
                    className="h-[14vh] mb-4"
                  ></textarea>
                  <button
                    className="primary mt-2"
                    type="submit"
                    disabled={commentBody.trim() === ""}
                  >
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CommentForm;
