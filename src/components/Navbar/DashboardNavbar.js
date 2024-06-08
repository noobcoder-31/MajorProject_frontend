import React, { useState } from "react";
import { Link } from "react-router-dom";
// import icons
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../../Context/AuthProvider";
const DarkNavbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const { setAuthUser, setIsLoggedIn } = useAuth();
  const logout = (event) => {
    event.preventDefault();
    setIsLoggedIn(false);
    setAuthUser(null);
  };

  return <div></div>;
  // <nav name="home" className="navbar">
  //   <div
  //     className={
  //       nav
  //         ? "bg-[#f8f8f8de] w-full h-[80px] absolute px-4 flex justify-between items-center transition-all ease-in-out delay-100 duration-300 z-[5]"
  //         : "w-full h-[80px] absolute px-4 flex justify-between items-center text-white z-[5]"
  //     }
  //   >
  //     <div className="logo">
  //       <h2 className="font-semibold uppercase">
  //         <a href="/" className="text-xl hover:text-teal-200">
  //           Travel Genie
  //         </a>
  //       </h2>
  //     </div>

  //     {/* <ul className="hidden md:flex">
  //       <Link to="/blog">
  //         <li>#destinations</li>
  //       </Link>
  //       <Link to="#">
  //         <li>#cities</li>
  //       </Link>
  //       <Link to="#">
  //         <li>#travel tips</li>
  //       </Link>
  //       <Link to="#">
  //         <li>#resources</li>
  //       </Link>
  //     </ul> */}

  //     <div className="nav-icons hidden md:flex">
  //       <ul className="hidden md:flex justify-center items-center">
  //         {Auth.loggedIn() ? (
  //           <>
  //             <Link to="/blog">
  //               <li>Blog</li>
  //             </Link>
  //             <Link to="/profile">
  //               <li className="mr-2">Profile</li>
  //             </Link>
  //             <a href="/" onClick={logout}>
  //               <li className="logout-btn">Logout</li>
  //             </a>
  //           </>
  //         ) : (
  //           <>
  //             <Link to="/">
  //               <li>Home</li>
  //             </Link>
  //             <Link to="/blog">
  //               <li>Blog</li>
  //             </Link>
  //             <Link to="/login">
  //               <li className="login-btn">Login / Register</li>
  //             </Link>
  //           </>
  //         )}
  //       </ul>
  //     </div>

  //     {/* HAMBURGER MENU */}
  //     <div
  //       className="hamburger-menu md:hidden hover:cursor-pointer"
  //       onClick={handleNav}
  //     >
  //       {!nav ? <Bars2Icon width={30} /> : <XMarkIcon width={30} />}
  //     </div>

  //     <div className={nav ? "mobile-menu active" : "mobile-menu"}>
  //       <ul className="primary my-4">
  //         {/* <Link to="/blog">
  //           <li>#destinations</li>
  //         </Link>
  //         <Link to="#">
  //           <li>#cities</li>
  //         </Link>
  //         <Link to="#">
  //           <li>#travel tips</li>
  //         </Link>
  //         <Link to="#">
  //           <li>#resources</li>
  //         </Link> */}
  //         <a href="/blog">
  //           <li>Blog</li>
  //         </a>
  //         <a href="/profile">
  //           <li>Profile</li>
  //         </a>
  //       </ul>

  //       <ul className="secondary my-4">
  //         {Auth.loggedIn() ? (
  //           <>
  //             <a href="/" onClick={logout}>
  //               <li className="logout-btn">Logout</li>
  //             </a>
  //           </>
  //         ) : (
  //           <>
  //             <a href="/login">
  //               <li className="login-btn">Login / Register</li>
  //             </a>
  //           </>
  //         )}
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
};

export default DarkNavbar;
