import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import {
  FaDumbbell,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const { darkMode, setDarkMode }
  =useTheme();
    console.log("Dark Mode:", darkMode);

  return (
         <nav
  className={`navbar ${
    darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
  }`}
>

      <div className="container-fluid">

        <Link className="navbar-brand fw-bold" to="/dashboard">
          <FaDumbbell className="me-2" />
          FitLife
        </Link>

        <div className="ms-auto d-flex align-items-center">

          <Link
            to="/profile"
            className="btn btn-light me-3"
          >
            <FaUserCircle className="me-2" />
            Profile
          </Link>


           <button
  className="btn btn-outline-primary ms-auto"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>


          <button
            className="btn btn-danger"
            onClick={logout}
          >
            <FaSignOutAlt className="me-2" />
            Logout
          </button>

          

        </div>

      </div>
    </nav>
  );
}

export default Navbar;