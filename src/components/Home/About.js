import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="about  bg-cover bg-top w-full h-full md:h-screen"
    >
      <div className="w-full md:max-w-screen-lg mx-auto p-8 flex flex-col justify-center z-[2]">
        <h1>Bringing the world to you</h1>
        <p className="my-4 text-center">
          Trip Tide was founded in 2022 by a traveler,{" "}
          <em className="text-teal-400">for travelers</em>.
        </p>
        <div className="flex flex-wrap justify-evenly items-start md:bg-[#ffffff8a] rounded-lg leading-loose">
          <div className="w-full md:w-1/2 p-4">
            We are a humble, small-scale travel agency to help plan your next
            getaway. Our core belief is that everyone should travel, and it is
            vital that we make travel accessible to everyone.
          </div>
          <div className="w-full md:w-1/2 p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
