import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const MyBookinngs = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [control, setConrol] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://travele-tourism-server.onrender.com/myBookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      });
  }, [control]);

  const handleDelete = (id) => {
    const checker = window.confirm("Are you sure to delete?");
    if (checker) {
      fetch(`https://travele-tourism-server.onrender.com/deleteBooking/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setConrol(!control);
          } else {
            setConrol(false);
          }
        });
    }
  };

  return (
    <div className="container">
      <h2 className="text-center blue-color">My Bookings</h2>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Tour Name</th>
              <th>Booked by</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {isLoading ? ( //Checkif if is loading
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            bookings?.map((booking, index) => (
              <tbody key={booking?._id}>
                <tr>
                  <td>{index}</td>
                  <td>{booking.tourName}</td>
                  <td>{booking.email}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.address}</td>
                  <td>{booking.status}</td>
                  <td>
                    <button onClick={() => handleDelete(booking._id)} className="btn btn-danger">
                      Cancel
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          )}
        </Table>
      </div>
    </div>
  );
};

export default MyBookinngs;
