import React from "react";
import Data from "./Data/Book-Data";

const Book = () => {
  const destinations = Data;

  return (
    <div
      name="book"
      className="book w-full md:w-screen h-full md:h-screen  p-8 bg-gray-100 flex flex-col items-center justify-center"
    >
      <h1 className="text-3xl text-center font-bold mb-8">
        Travel light, save tight, see bright.
      </h1>

      {/* Search Form */}
      <form className="search-form w-full md:max-w-4xl bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex flex-col">
            <label className="block text-sm mb-1">From</label>
            <input
              type="text"
              placeholder="E.x. Delhi"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm mb-1">To</label>
            <input
              type="text"
              placeholder="E.x. Manali"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm mb-1">Passengers</label>
            <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400">
              {[...Array(9)].map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1} Passenger{index !== 0 && "s"}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="block text-sm mb-1">Departure Date</label>
            <input
              type="date"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm mb-1">Return Date</label>
            <input
              type="date"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="col-span-3 flex justify-center">
            <button className="primary w-full md:w-auto h-10 md:h-[43px] rounded-md text-white font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4">
              Find Your Trip
            </button>
          </div>
        </div>
      </form>

      {/* Search Results */}
    </div>
  );
};

export default Book;
