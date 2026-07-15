import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useTheme } from "./context/ThemeContext";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddWorkout from "./pages/AddWorkout";
import EditWorkout from "./pages/EditWorkout";
import Profile from "./pages/Profile";
import BMI from "./pages/BMI";
import Goals from "./pages/Goals";
import WaterTracker from "./pages/WaterTracker";
import SleepTracker from "./pages/SleepTracker";
import Diet from "./pages/Diet";
import WorkoutHistory from "./pages/WorkoutHistory";
import CalendarPage from "./pages/CalendarPage";
import WorkoutPlan from "./pages/WorkoutPlan";
import ExerciseDetails from "./pages/ExerciseDetails";

function App() {
  const { darkMode } = useTheme();
   
  return (

  <div
  className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}
  style={{ minHeight: "100vh" }}
>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-workout" element={<AddWorkout />} />
        <Route path="/edit-workout/:id" element ={<EditWorkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/water" element={<WaterTracker />} />
        <Route path="/sleep" element={<SleepTracker />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/history" element={<WorkoutHistory />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/workout-plan" element={<WorkoutPlan />} />
        <Route path="/exersice-details" element={<ExerciseDetails />} />



      </Routes>
    
    <ToastContainer
    position="top-right"
    autoClose={3000}/>

    </BrowserRouter>
    </div>
  
  );
}

export default App;