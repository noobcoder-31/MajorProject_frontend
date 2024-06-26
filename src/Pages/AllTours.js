import React, { useEffect, useState } from "react";
import Tour from "../Pages/Tour.js";
import { Loader } from "react-feather";

const AllTours = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://travele-tourism-server.onrender.com/tours")
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-5">
      <h2 className="text-center blue-color">
        <i className="fas fa-flask"></i> Our Upcoming Tours
      </h2>
      <p className="text-center fs-5">
        We try to provide the best experience posible. We prefer quality over
        anything.
      </p>
      <div className="container">
        <div className="row g-3">
          {isLoading ? (
            <Loader animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Loader>
          ) : (
            tours.map((tour) => <Tour key={tour._id} tour={tour}></Tour>)
          )}
        </div>
      </div>
    </div>
  );
};

export default AllTours;
