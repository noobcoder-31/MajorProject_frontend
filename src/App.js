import React from "react";
import { Routes, Route, Navigate, Router } from "react-router-dom";

// components
import Footer from "./components/Footer";

// pages
import Blog from "./Pages/Blog.js";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NoMatch from "./Pages/NoMatch";
import SinglePost from "./Pages/SinglePost";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";
import PackageDetailsPage from "./Pages/PackageDetailsPage.js";
import Discover from "./Pages/Discover.js";
import HomeNavbar from "./components/Navbar/HomeNavbar.js";
import Search from "./components/Home/Search.js";
import { useAuth } from "./Context/AuthProvider.js";
import { Toaster } from "react-hot-toast";
import Booking from "./Pages/Booking.js";
import WeatherWidget from "./Pages/Weather.js";
import Mentee from "./Pages/Mentee.js";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="pages">
      <Toaster />
      <HomeNavbar color={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/" /> : <Signup />}
        />
        <Route path="/discover" element={<Discover />} />
        <Route path="/search" element={<Search />} />
        <Route path="/weather" element={<WeatherWidget />} />
        <Route exact path="/package/:id" element={<PackageDetailsPage />} />
        <Route path="/profile">
          <Route path=":username" element={<Profile />} />
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/book/:id" element={<Booking />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/mentee" element={<Mentee />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
