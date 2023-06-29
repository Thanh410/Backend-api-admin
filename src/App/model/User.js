const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String },
    OTP: { type: Number },
    country: { type: String },
    city: { type: String },
    phone: { type: String },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
    photos: { type: Array },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
