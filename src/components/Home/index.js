import React from "react";
import Navbar from "../Navbar/HomeNavbar";
import Background from "./Background";
import Search from "./Search";
import Book from "./Book";
import Discover from "./Discover";
import About from "./About";
import Footer from "../Footer";
import Home2 from "./Home2.js";
import Subscribe from "./Subscribe.js";
import Gallery from "../../Pages/Gallery.js";
import Reviews from "./Experience.js";
const Home = () => {
  return (
    <>
      <Navbar />
      <Background />
      <Home2 />
      {/* <Book /> */}
      <Discover />
      <Gallery />
      <Reviews />
      <Subscribe />
    </>
  );
};

export default Home;
