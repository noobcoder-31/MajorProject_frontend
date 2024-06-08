import React from "react";
import { Link } from "react-scroll";

import Video from "../../assets/bg_video.mp4";

const Background = () => {
  return (
    <>
      <div className="hero w-full h-screen relative text-white">
        <video
          autoPlay
          loop
          muted
          id="video"
          className="w-full h-full object-cover z-[-5]"
        >
          <source src={Video} type="video/mp4" />
        </video>

        <div className="overlay bg-[#00000016]"></div>

        <div className="content w-full h-full m-auto absolute top-0 flex flex-col justify-center items-center text-cyan-100">
          <h1 className="text-2xl md:text-5xl normal-case">
            Create Memories That Last a Lifetime
          </h1>
          <h2 className="my-4 text-lg md:text-xl p-0 m-0 normal-case mx-80">
            Get ready to explore the world like never before. With Travel genie,
            your dream vacation is just a click away. Discover, plan, and
            experience the journey of a lifetime with ease and excitement. Let's
            make memories together.
          </h2>
          <Link to="search" smooth={true} duration={500}>
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Background;
