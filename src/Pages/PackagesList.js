// PackagesList.js
import React from "react";
import { Link } from "react-router-dom";
import PackageCard from "./PackageCard";

const PackagesList = ({ packages }) => {
  return (
    <div className="container mx-auto mt-8 px-28">
      <h1 className="text-3xl font-bold text-gray-800 mt-24">
        Explore Packages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((packageData) => (
          <Link key={packageData.id} to={`/package/${packageData.id}`}>
            <PackageCard packageData={packageData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PackagesList;
