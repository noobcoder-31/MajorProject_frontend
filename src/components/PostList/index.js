import React from "react";
import { Link } from "react-router-dom";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

const PostList = ({ post }) => {
  const { _id, title, content, createdAt, commentCount, author, photo } = post;
  const time = new Date(createdAt).toLocaleString([], {
    hour: "numeric",
    minute: "numeric",
  });
  const date = new Date(createdAt).toLocaleDateString();

  function deletePostCallback() {
    // Simulate deleting the post
    console.log(`Deleting post with ID: ${_id}`);
    // Redirect to the blog page after deletion (assuming you want this behavior)
    window.location.assign("/blog");
  }

  return (
    <>
      <article
        key={_id}
        className="bg-gray-50 mx-1 my-4 p-4 break-inside-avoid flex flex-col rounded-lg shadow-lg hover:shadow-slate-400 transition-all ease-in duration-300"
      >
        <div className="flex items-center">
          <div className="mr-4">
            <img
              src={
                photo
                  ? `${photo}`
                  : `https://images.unsplash.com/photo-1620750034602-1ad42e46b86b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80`
              }
              alt={author}
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div>
            <Link
              to={`/profile/${author}`}
              className="font-semibold text-teal-400 hover:text-gray-500 uppercase tracking-widest"
            >
              {author}
            </Link>
            <p className="text-gray-400 text-xs">
              {time}
              {"     "}
              {date}
            </p>
          </div>
        </div>
        <h3 className="my-4">
          <div className="text-left hover:text-teal-300">{title}</div>
        </h3>
        <div className="card-body">
          <p>{content}</p>
          <div className="mt-4 pt-4 flex justify-between items-center text-gray-400 text-xs md:text-sm border-t border-gray-200">
            <div className="inline-flex">
              <Link
                to={`/post/${_id}`}
                className="mr-4 flex items-center hover:text-teal-400"
              >
                <ChatBubbleLeftRightIcon width={20} className="mr-1" />{" "}
                {commentCount} {commentCount === 1 ? "comment" : "comments"}
              </Link>
            </div>
            <div>
              {/* Simulated user authentication */}
              {author === "current_user" && (
                <button
                  onClick={deletePostCallback}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default PostList;
