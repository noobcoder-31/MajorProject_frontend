import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import Layout from "../components/Layout/Dashboard";
import { useAuth } from "../Context/AuthProvider";
import {
  UserIcon,
  AtSymbolIcon,
  LockClosedIcon,
  ArrowLongRightIcon,
  MapPinIcon,
  BriefcaseIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";
import URL from "../URL";
import { Person2 } from "@mui/icons-material";

const Signup = () => {
  const { login } = useAuth();
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    location: "",
    description: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formState);
      const response = await axios.post(`${URL}/auth/register`, formState);

      login(response);
    } catch (error) {
      setErr(error);
      console.error("Signup failed:", error);
    }
  };

  return (
    <Layout>
      <div className="w-full h-screen">
        <div className="signup  bg-fixed bg-cover w-full h-full flex flex-col justify-center items-center px-4">
          <div className="mb-8 flex flex-col justify-center items-center text-white z-[1]">
            <h1>Sign Up</h1>
            <h2>Join the travel community</h2>
          </div>
          <div className="card">
            <form className="w-full max-w-[500px]" onSubmit={handleFormSubmit}>
              <div className="relative">
                <div className="icons">
                  <UserIcon width={20} />
                </div>
                <input
                  placeholder="Enter username"
                  name="username"
                  type="text"
                  id="username"
                  value={formState.username}
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <div className="icons">
                  <AtSymbolIcon width={20} />
                </div>
                <input
                  placeholder="Enter email address"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <div className="icons">
                  <Person2 width={20} />
                </div>
                <select
                  placeholder="Select gender"
                  name="gender"
                  id="gender"
                  value={formState.gender}
                  onChange={handleChange}
                  className="ml-8 text-sm"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="relative">
                <div className="icons">
                  <LockClosedIcon width={20} />
                </div>
                <input
                  placeholder="Password"
                  name="password"
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <div className="icons">
                  <MapPinIcon width={20} />
                </div>
                <input
                  placeholder="Location"
                  name="location"
                  type="text"
                  id="location"
                  value={formState.location}
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <div className="icons">
                  <IdentificationIcon width={20} />
                </div>
                <input
                  placeholder="Full Name"
                  name="fullname"
                  type="text"
                  id="fullname"
                  value={formState.fullname}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="primary">
                Create Account
              </button>

              <div className="w-full flex justify-center items-center text-sm leading-loose">
                Already a member?
                <Link
                  to="/login"
                  className="inline-flex items-center ml-2 text-teal-400 hover:text-teal-200"
                >
                  Login{" "}
                  <ArrowLongRightIcon
                    width={25}
                    className="inline-flex items-center ml-1"
                  />
                </Link>
              </div>
            </form>
            {err && (
              <div className="text-sm text-red-600 italic">
                {" "}
                {err.message ? err.message : "Some Error Ocurred!!"}
              </div>
            )}
          </div>
          {/* <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r opacity-80 from-teal-100 via-slate-600 to-sky-800 z-0"></div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
