import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Dashboard";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import { useAuth } from "../Context/AuthProvider";
import axios from "axios";
import URL from "../URL.js";

const Blog = () => {
  const { isLoggedIn } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${URL}/blog`);
      setPosts(response.data.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handlePostCreated = () => {
    fetchPosts();
  };

  return (
    <Layout>
      <div className="w-full h-full min-h-screen p-4 flex flex-col justify-center items-center">
        <div className="w-full mt-[120px] mx-8 mb-8 flex flex-col justify-center items-center text-white">
          <h1>Blog</h1>
          <h2 className="flex items-center">
            Turning travel passions into travel plans
          </h2>
        </div>
        <div className="box-border max-w-screen-xl mx-4 mb-8">
          {isLoggedIn && <PostForm onPostCreated={handlePostCreated} />}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostList key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
