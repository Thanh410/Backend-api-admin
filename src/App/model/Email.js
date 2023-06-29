const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmailSchema = new Schema(
  {
    email: { type: String },
    OTP: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Email", EmailSchema);
