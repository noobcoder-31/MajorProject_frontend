import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import Layout from "../components/Layout/Dashboard";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import LikeButton from "../components/LikeButton";
import DeleteButton from "../components/DeleteButton";
import { useAuth } from "../Context/AuthProvider";

const SinglePost = () => {
  const { isLoggedIn } = useAuth();
  const { id: postId } = useParams();
  const loading = false;

  const user = {
    username: "example-user",
  };
  const post = {
    _id: "1", // Unique identifier for the post
    username: "example_user", // Username of the post author
    createdAt: "2024-05-03", // Date and time when the post was created
    postTitle: "Example Post Title", // Title of the post
    postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", // Content of the post
    commentCount: 3, // Number of comments on the post
    comments: [
      // Array of comments on the post
      {
        _id: "1", // Unique identifier for the comment
        username: "commenter1", // Username of the comment author
        createdAt: "2024-05-03", // Date and time when the comment was created
        commentText: "Nice post!", // Content of the comment
      },
      {
        _id: "2",
        username: "commenter2",
        createdAt: "2024-05-03",
        commentText: "Great content!",
      },
      {
        _id: "3",
        username: "commenter3",
        createdAt: "2024-05-03",
        commentText: "Keep it up!",
      },
    ],
    likes: [], // Array of users who liked the post
    likeCount: 0, // Number of likes on the post
  };

  if (loading) {
    return <div>Loading...</div>;
  } else {
    let postMarkup;
    const { _id, likes, likeCount } = post;

    function deletePostCallback() {
      window.location.replace("/blog");
    }

    postMarkup = (
      <Layout>
        <div className="w-full h-full min-h-screen">
          <div className="px-4 flex flex-col justify-center items-center">
            <article className="w-full max-w-screen-md mt-[130px] bg-gray-50 m-4 p-4 flex flex-col rounded-md shadow-lg">
              <div className="w-full flex items-center">
                <div className="mr-4">
                  <img
                    src={`https://images.unsplash.com/photo-1620750034602-1ad42e46b86b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80`}
                    alt={post.username}
                    className="w-14 h-14 md:w-20 md:h-20 rounded-full"
                  />
                </div>
                <div>
                  <Link
                    to={`/profile/${post.username}`}
                    className="font-semibold text-teal-400 hover:text-gray-500 uppercase tracking-widest"
                  >
                    {post.username}
                  </Link>
                  <p className="text-gray-400 text-sm">{post.createdAt}</p>
                </div>
              </div>
              <h3 className="w-full my-4">
                <Link
                  to={`/post/${post._id}`}
                  className="text-left hover:text-teal-300"
                >
                  {post.postTitle}
                </Link>
              </h3>
              <div className="card-body">
                <p>{post.postText}</p>
              </div>

              <div className="mt-4 pt-4 flex justify-between items-center text-gray-400 text-xs md:text-sm border-t border-gray-200">
                <div className="inline-flex">
                  <Link
                    to={`/post/${post._id}`}
                    className="mr-4 flex items-center hover:text-teal-400"
                  >
                    <ChatBubbleLeftRightIcon width={20} className="mr-1" />{" "}
                    {post.commentCount}{" "}
                    {post.commentCount === 1 ? "comment" : "comments"}
                  </Link>

                  <LikeButton user={user} post={{ _id, likes, likeCount }} />
                </div>
                <div>
                  {/* gives user the option to delete their own post */}
                  {user && user.username === post.username && (
                    <DeleteButton
                      postId={post._id}
                      callback={deletePostCallback}
                    />
                  )}
                </div>
              </div>
            </article>

            {post.commentCount > 0 && <CommentList comments={post.comments} />}

            {isLoggedIn && <CommentForm postId={post._id} />}
          </div>
        </div>
      </Layout>
    );
    return postMarkup;
  }
};

export default SinglePost;
