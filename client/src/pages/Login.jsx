import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

  function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);

      //show sucess message

     toast.success("Login Successful !");

      //Go to Dashboard
      navigate("/dashboard");

      console.log(res.data);
    } catch (error) {
      toast(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
    >
      <h1 style={{ textAlign: "center" }} className="fw-bold text-primary">Workout Planner</h1>
      <h3 style={{ textAlign: "center" }}>Login</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /><br />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

       <p className="text-center mt-4">
  Don't have an account?{" "}
  <Link
    to="/register"
    className="text-primary fw-bold text-decoration-none"
  >
    Register
  </Link>
</p>


      </form>
    </div>
  );
}

export default Login;