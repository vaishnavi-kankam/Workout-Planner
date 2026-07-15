import React, { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: "",
    profileImage:"",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await API.get("/users/profile");
      setProfile(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load profile");
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    setProfile({
      ...profile,
      profileImage: reader.result,
    });
  };

  reader.readAsDataURL(file);
}; 

  const handleUpdate = async () => {
    try {
      await API.put("/users/profile", {
        age: profile.age,
        gender: profile.gender,
        height: profile.height,
        weight: profile.weight,
        goal: profile.goal,
        profileImage: profile.profileImage,
      });

      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    }
  };

  return (
       <div
  className="container py-5"
  style={{
    minHeight: "100vh",
    background:"linear-gradient(135deg,#e0f7fa,#e3f2fd)",
  }}
>
      <h2
  className="text-center fw-bold mb-4"
  style={{
    color: "#0d6efd",
    fontSize: "36px",
  }}
>
  👤 My Profile
</h2>
          <div
  className="card shadow-lg border-0 p-4 mx-auto"
  style={{
    maxWidth: "550px",
    borderRadius: "20px",
  }}
>
      
      <div className="text-center mb-4">

  <img
    src={
      profile.profileImage ||
      "https://via.placeholder.com/150"
    }
    alt="Profile"
    className="rounded-circle"
    width="150"
    height="150"
  />

  <div className="mt-3">
    <input
      type="file"
      accept="image/*"
      className="form-control"
      onChange={handleImageChange}
    />
  </div>

</div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={profile.name}
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={profile.email}
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={profile.age}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            name="gender"
            className="form-control"
            value={profile.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Height (cm)</label>
          <input
            type="number"
            name="height"
            className="form-control"
            value={profile.height}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            className="form-control"
            value={profile.weight}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Fitness Goal</label>
          <select
            name="goal"
            className="form-control"
            value={profile.goal}
            onChange={handleChange}
          >
            <option value="">Select Goal</option>
            <option>Weight Loss</option>
            <option>Muscle Building</option>
            <option>Stay Fit</option>
            <option>Strength Training</option>
          </select>
        </div>

        <button
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Save Changes
        </button>

      </div>
    </div>
  );
}

export default Profile;