import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", formData);
      toast.success(res.data.message);

      setFormData({
        name: "",
        email: "",
        password: "",
        age: "",
        height: "",
        weight: "",
        gender: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
         <div
  className="container-fluid d-flex justify-content-center align-items-center"
  style={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #e0f7fa, #e3f2fd)",
  }}
>
  <div
    className="card shadow-lg border-0 p-4"
    style={{
      width: "450px",
      borderRadius: "20px",
      background: "#fff",
    }}
  >

       <h2 className="text-center fw-bold text-primary">
  🏋️ Workout Planner
</h2>

<h3 className="text-center mb-4">
  📝 Create Account
</h3>
     

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-control shadow-sm"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          className="form-control shadow-sm"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          className="form-control shadow-sm"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="age"
          className="form-control shadow-sm"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="height"
          className="form-control shadow-sm"
          placeholder="Height (cm)"
          value={formData.height}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="weight"
          className="form-control shadow-sm"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={handleChange}
        />
        <br /><br />

        <select
  className="form-select shadow-sm"
  name="gender"
  value={formData.gender}
  onChange={handleChange}
>

          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <br /><br />

       <button
  type="submit"
  className="btn btn-success w-100 rounded-pill fw-bold shadow py-2"
>
  🚀 Register
</button>

<p className="text-center mt-4">
  Already have an account?{" "}
  <Link
    to="/login"
    className="text-primary fw-bold text-decoration-none"
  >
    Login
  </Link>
</p>
        
      </form>
    </div>
    </div>
  );
}

export default Register;