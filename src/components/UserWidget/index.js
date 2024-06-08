import React from "react";
import { Link } from "react-router-dom";
import { Email, Person, PinDrop } from "@mui/icons-material";

const UserWidget = ({ username, email, photo, fullname, location }) => {
  return (
    <>
      <section className="w-full p-3 flex flex-col items-center">
        {/* PROFILE IMG */}
        <div className="w-full flex flex-wrap items-center">
          <img src={photo} alt={username} className="w-20 h-20 rounded-full" />
          <div className="flex flex-col ml-3">
            <div className="mb-2 text-gray-600 text-left">
              <h3>{username}</h3>
            </div>
          </div>
        </div>
        {/* USER email & BIO */}
        <div className="w-full mt-4 flex flex-col text-gray-400 text-sm">
          {email && (
            <div className="my-1 flex items-center">
              <Email width={18} className="text-gray-600 mr-2" />
              {email}
            </div>
          )}
          {fullname && (
            <div className="my-1 flex items-center">
              <Person width={18} className="text-gray-600 mr-2" />
              {fullname}
            </div>
          )}
          {location && (
            <div className="my-1 flex items-center">
              <PinDrop width={18} className="text-gray-600 mr-2" />
              {location}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default UserWidget;
