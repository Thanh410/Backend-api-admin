const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, unique: true },
    OTP: { type: Number },
    country: { type: String },
    city: { type: String },
    phone: { type: String, unique: true },
    img: { type: String },
    isAdmin: { type: Boolean, default: true },
    photos: { type: Array },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
