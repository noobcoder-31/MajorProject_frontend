import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faList,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import toast from "react-hot-toast";

const Mentee = () => {
  const [mentees, setMentees] = useState([
    {
      name: "John Doe",
      mobile: "123-456-7890",
      email: "johndoe@example.com",
      details: "Experienced tour guide in the city center.",
      availableTime: "Weekends",
      location: "New York, USA",
    },
    {
      name: "Jane Smith",
      mobile: "098-765-4321",
      email: "janesmith@example.com",
      details: "Local food expert and culinary guide.",
      availableTime: "Evenings",
      location: "Paris, France",
    },
    {
      name: "Mike Johnson",
      mobile: "555-555-5555",
      email: "mikejohnson@example.com",
      details: "History enthusiast and museum guide.",
      availableTime: "Mornings",
      location: "Tokyo, Japan",
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    details: "",
    availableTime: "",
    location: "",
  });
  const [searchLocation, setSearchLocation] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddMentee = () => {
    const { name, mobile, email, details, availableTime, location } = formData;

    if (!name || !mobile || !email || !details || !availableTime || !location) {
      toast.error("Please fill in all fields.");
      return;
    }

    setMentees([...mentees, formData]);
    setFormData({
      name: "",
      mobile: "",
      email: "",
      details: "",
      availableTime: "",
      location: "",
    });
    setShowForm(false);
    toast.success("Mentee added successfully!!");
  };

  const handleFindMentee = () => {
    if (!searchLocation.trim()) {
      // If the search location is empty, reset to show all mentees
      setMentees([
        {
          name: "John Doe",
          mobile: "123-456-7890",
          email: "johndoe@example.com",
          details: "Experienced tour guide in the city center.",
          availableTime: "Weekends",
          location: "New York, USA",
        },
        {
          name: "Jane Smith",
          mobile: "098-765-4321",
          email: "janesmith@example.com",
          details: "Local food expert and culinary guide.",
          availableTime: "Evenings",
          location: "Paris, France",
        },
        {
          name: "Mike Johnson",
          mobile: "555-555-5555",
          email: "mikejohnson@example.com",
          details: "History enthusiast and museum guide.",
          availableTime: "Mornings",
          location: "Tokyo, Japan",
        },
      ]);
    } else {
      // If there's a search location, filter the mentees accordingly
      const filteredMentees = mentees.filter((mentee) =>
        mentee.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
      setMentees(filteredMentees);
    }
  };

  return (
    <div className="container mx-auto p-4 mt-24">
      <div className="flex justify-center mb-8">
        <button
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105"
          onClick={() => setShowForm(true)}
        >
          <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Add Mentee
        </button>
        <div className="ml-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search Location"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-l focus:outline-none"
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none"
              onClick={handleFindMentee}
            >
              <FontAwesomeIcon icon={faSearchLocation} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-lg">
          {mentees.map((mentee, index) => (
            <div
              key={index}
              className="bg-white border p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                {mentee.name}
              </h2>
              <p className="text-gray-700 mb-2">
                <strong>Mobile:</strong> {mentee.mobile}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> {mentee.email}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Details:</strong> {mentee.details}
              </p>
              <p className="text-gray-700">
                <strong>Available Time:</strong> {mentee.availableTime}
              </p>
              <p className="text-gray-700">
                <strong>Location:</strong> {mentee.location}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={showForm} onClose={() => setShowForm(false)}>
        <DialogTitle>Add New Mentee</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="mobile"
            label="Mobile"
            type="text"
            fullWidth
            value={formData.mobile}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="details"
            label="Details"
            type="text"
            fullWidth
            value={formData.details}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="availableTime"
            label="Available Time"
            type="text"
            fullWidth
            value={formData.availableTime}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="location"
            label="Location"
            type="text"
            fullWidth
            value={formData.location}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowForm(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddMentee} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Mentee;
