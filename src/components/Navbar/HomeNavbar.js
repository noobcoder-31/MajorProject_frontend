import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import icons
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../../Context/AuthProvider";
const HomeNavbar = ({ color }) => {
  const location = useLocation();
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const { logout, isLoggedIn } = useAuth();
  const logoutM = (event) => {
    event.preventDefault();
    logout();
  };

  const isHomePage = location.pathname === "/";

  return (
    <nav name="home" className="navbar fixed top-0 w-full z-[10]">
      <div
        className={`w-full h-[80px] absolute px-4 flex justify-between items-center ${
          nav
            ? "bg-[#f8f8f8de] transition-all ease-in-out delay-100 duration-300"
            : isHomePage
            ? "text-white"
            : "bg-black text-white"
        }`}
      >
        <div className="logo">
          <h2 className="font-semibold uppercase">
            <Link to="/" className="text-xl hover:text-teal-200">
              Travel genie
            </Link>
          </h2>
        </div>

        <ul className="hidden md:flex">
          <Link to="/" smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="/search" smooth={true} duration={500}>
            <li>Search</li>
          </Link>
          <Link to="/weather" smooth={true} duration={500}>
            <li>Weather</li>
          </Link>
          <Link to="/discover" smooth={true} duration={500}>
            <li>Discover</li>
          </Link>
          <Link to="/mentee" smooth={true} duration={500}>
            <li>Mentee</li>
          </Link>
        </ul>

        <div className="nav-icons hidden md:flex">
          <ul className="hidden md:flex justify-center items-center">
            {isLoggedIn ? (
              <>
                <Link to="/blog">
                  <li>Blog</li>
                </Link>
                <Link to="/profile">
                  <li className="mr-2">Profile</li>
                </Link>
                <a href="/" onClick={logoutM}>
                  <li className="logout-btn">Logout</li>
                </a>
              </>
            ) : (
              <>
                <Link to="/blog">
                  <li>Blog</li>
                </Link>
                <Link to="/login">
                  <li className="login-btn">Login / Register</li>
                </Link>
              </>
            )}
          </ul>
        </div>

        {/* HAMBURGER MENU */}
        <div
          className="hamburger-menu md:hidden hover:cursor-pointer"
          onClick={handleNav}
        >
          {!nav ? <Bars2Icon width={30} /> : <XMarkIcon width={30} />}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="primary my-4">
          <Link to="/" smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="/weather" smooth={true} duration={500}>
            <li>Weather</li>
          </Link>
          <Link to="/discover" smooth={true} duration={500}>
            <li>Discover</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <Link to="/mentee">
            <li>Mentee</li>
          </Link>
        </ul>

        <ul className="secondary my-4">
          {isLoggedIn ? (
            <>
              <a href="/" onClick={logoutM}>
                <li className="logout-btn">Logout</li>
              </a>
            </>
          ) : (
            <>
              <Link to="/login">
                <li className="login-btn">Login / Register</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavbar;
