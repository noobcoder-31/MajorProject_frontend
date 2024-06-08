import React, { useState } from "react";
import { X } from "react-feather";
import axios from "axios";
import { useAuth } from "../../Context/AuthProvider.js";
import URL from "../../URL";
import toast from "react-hot-toast";

const PostForm = ({ onPostCreated }) => {
  const { authUser } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const user = authUser.data.data;

  const config = {
    headers: {
      Authorization: `Bearer ${authUser.data.token}`,
    },
  };

  const addPost = async (postData) => {
    try {
      const response = await axios.post(`${URL}/blog`, postData, config);
      console.log("Post added successfully:", response.data);
      toast.success("Successfully added!!!");
      setPostTitle("");
      setPostText("");
      setShowModal(false);
      onPostCreated(); // Call the callback function after successful post creation
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Error adding post:", error);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (postTitle.trim() === "" || postText.trim() === "") {
      toast.error("Some Fields are Empty!!");
      return;
    }
    const postData = {
      title: postTitle,
      content: postText,
      author: user.username,
    };
    addPost(postData);
  };

  return (
    <div className="w-full px-1 flex items-center">
      <div className="post-form">
        <input
          placeholder="What's on your mind..."
          onClick={() => setShowModal(true)}
          className="input"
        />
        <div className="flex items-center justify-center">
          {showModal && (
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModal(false)}
              />
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-lg shadow-lg">
                  <div
                    className="mb-4 flex justify-end items-center text-gray-400 hover:text-teal-300 hover:cursor-pointer transition-all ease-in duration-300"
                    onClick={() => setShowModal(false)}
                  >
                    <X width={25} className="inline-flex items-center" />
                  </div>
                  <h1 className="text-3xl">Create New Post</h1>
                  <form
                    className="w-full px-4 pb-2 flex flex-col justify-center"
                    onSubmit={handleFormSubmit}
                  >
                    <input
                      type="text"
                      placeholder="Enter title"
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                    />
                    <textarea
                      placeholder="What's on your mind..."
                      value={postText}
                      onChange={(e) => setPostText(e.target.value)}
                      className="h-[14vh] mb-4"
                    />
                    <button
                      className="primary mt-2"
                      disabled={
                        postText.trim() === "" || postTitle.trim() === ""
                      }
                    >
                      Post
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostForm;
