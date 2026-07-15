import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaPlusCircle,
  FaHeartbeat,
  FaBullseye,
  FaTint,
  FaMoon,
  FaAppleAlt,
} from "react-icons/fa";

 function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <h4 className="text-center mb-4">🏋️ FitLife</h4>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <Link to="/dashboard" className="nav-link text-white">
            <FaHome className="me-2" />
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="/profile" className="nav-link text-white">
            <FaUser className="me-2" />
            Profile
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="/add-workout" className="nav-link text-white">
            <FaPlusCircle className="me-2" />
            Add Workout
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="/history" className="nav-link text-white">
            <FaPlusCircle className="me-2" />
           Workout History
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="/workout-plan" className="nav-link text-white">
            <FaPlusCircle className="me-2" />
           Workout Plan
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="/bmi" className="nav-link text-white">
            <FaHeartbeat className="me-2" />
            BMI Calculator
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="/goals" className="nav-link text-white">
            <FaBullseye className="me-2" />
            Goals
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="/water" className="nav-link text-white">
            <FaTint className="me-2" />
            Water Tracker
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="/sleep" className="nav-link text-white">
            <FaMoon className="me-2" />
            Sleep Tracker
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="/diet" className="nav-link text-white">
            <FaAppleAlt className="me-2" />
            Diet Plan
          </Link>
        </li>
          
          <li className="nav-item mb-2">
          <Link to="/exersice-details" className="nav-link text-white">
            <FaAppleAlt className="me-2" />
            Exercise Details
          </Link>
        </li>



        <li className="nav-item mb-2">
          <Link to="/calendar" className="nav-link text-white">
            <FaAppleAlt className="me-2" />
            Workout Calendar
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;