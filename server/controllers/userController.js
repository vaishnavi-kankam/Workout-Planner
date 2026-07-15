const User = require("../models/User");

// Get Profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update Profile
const updateProfile = async (req, res) => {
  try {
    const { age, gender, height, weight, goal, profileImage } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.age = age;
    user.gender = gender;
    user.height = height;
    user.weight = weight;
    user.goal = goal;
    user.profileImage = profileImage;

    await user.save();

    res.status(200).json({
      message: "Profile Updated Successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getProfile,
  updateProfile,
};