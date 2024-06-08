import { Call } from "@mui/icons-material";
import image from "../../assets/footer.jpg";
import React from "react";
//import icons
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "react-feather";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mt-20">
        <div className="w-full md:w-1/2 mx-4 md:mx-20 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-2xl font-medium">
            Contact us for Any Queries
          </h1>
          <div className="w- h-1 bg-black my-4 mx-auto md:mx-0" />
          <p className="text-sm sm:text-base md:text-lg mt-4">
            If you have any questions or need assistance, feel free to reach out
            to us. Our dedicated support team is available to help you with any
            queries you may have. Contact us now and experience unmatched
            customer service.
          </p>
          <div className="mt-6 md:mt-10">
            <div className="flex items-center">
              <Call size={25} className="icon" />
              <span className="ml-2 sm:ml-4 md:ml-6 text-base sm:text-lg">
                +91 70000 91234
              </span>
            </div>
            <div className="flex items-center mt-2 sm:mt-4 md:mt-6">
              <Mail size={25} className="icon" />
              <span className="ml-2 sm:ml-4 md:ml-6 text-base sm:text-lg">
                karan301910@tgenie.io
              </span>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-1/2 mx-4 md:ml-80">
          <img
            src={image}
            alt="Bag"
            className="w-full h-auto md:w-80 md:h-80"
          />
        </div>
      </div>
      <div className="bg-black mx-auto md:my-30 my-10 h-px w-2/3"></div>
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-lg md:text-xl">Follow Us On</h1>
        <div className="flex justify-center items-center space-x-4 my-4">
          <div className="flex space-x-4">
            <div className="hover:scale-110 transition-transform">
              <a href="https://instagram.com">
                <Instagram size={25} className="icon" />
              </a>
            </div>
            <div className="hover:scale-110 transition-transform">
              <a href="https://twitter.com">
                <Twitter size={25} className="icon" />
              </a>
            </div>
            <div className="hover:scale-110 transition-transform">
              <a href="https://facebook.com">
                <Facebook size={25} className="icon" />
              </a>
            </div>
            <div className="hover:scale-110 transition-transform">
              <a href="https://www.linkedin.com/in/raj-karan-singh-tomar-a2a376236/">
                <Linkedin size={25} className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white flex flex-col items-center justify-center py-10">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-medium">
          Travel Genie
        </h2>
        <p className="text-xs sm:text-base md:text-lg mt-4 px-5 py-5 text-center">
          Travel Genie: Your personalized travel companion. Discover, plan, and
          book your dream vacations effortlessly. With curated itineraries,
          exclusive deals, and real-time updates, let Travel Genie make your
          travel dreams a reality.
        </p>
        <span className="text-gray-500">
          © 2024 Travel genie. All rights reserved.
        </span>
      </div>
    </>
  );
};

export default Footer;
