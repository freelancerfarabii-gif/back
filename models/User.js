const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: { type: String },
  otpExpire: { type: Date },
  profilePic: { type: String }
}, {
  timestamps: true // Optional: adds createdAt and updatedAt
});

module.exports = mongoose.model("User", userSchema);