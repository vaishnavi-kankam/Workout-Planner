const Workout = require("../models/Workout");

// Create Workout
const createWorkout = async (req, res) => {
  try {
    const { workoutType, duration, caloriesBurned } = req.body;

    const workout = new Workout({
      user: req.user.id,
      workoutType,
      duration,
      caloriesBurned,
    });

    await workout.save();

    res.status(201).json({
      message: "Workout Added Successfully",
      workout,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get All Workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user.id });

    res.status(200).json(workouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
// Update Workout
const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({
        message: "Workout not found",
      });
    }

    // Check if workout belongs to logged-in user
    if (workout.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    const updatedWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Workout Updated Successfully",
      workout: updatedWorkout,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Delete Workout
const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({
        message: "Workout not found",
      });
    }

    // Check if workout belongs to logged-in user
    if (workout.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await Workout.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Workout Deleted Successfully",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
};