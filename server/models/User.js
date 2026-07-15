const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      default: 0,
    },

    gender: {
      type: String,
      default: "",
    },

    height: {
      type: Number,
      default: 0,
    },

    weight: {
      type: Number,
      default: 0,
    },

    goal: {
      type: String,
      default: "",
    },

    profileImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);