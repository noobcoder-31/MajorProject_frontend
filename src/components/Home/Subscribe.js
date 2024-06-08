import React from "react";
import image from "../../assets/subscribe.jpg";
const Subscribe = () => {
  return (
    <section className="bg-gray-100 py-12 mt-32">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center  md:justify-between">
          <div className="md:w-1/2 md:pr-8">
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Subscribe to Get Useful Traveling Information
              </h2>
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400 mb-4 md:mb-0 md:mr-4"
                />
                <button className="btn bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                We will only send you updates regarding new tours and discounts
                on packages, also your data will not be shared with anyone.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="hidden md:block">
              <img
                src={image}
                alt="Male Tourist"
                className="mx-auto md:mr-0 w-2/3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
