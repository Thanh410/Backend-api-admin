const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema(
  {
    title: { type: String },
    price: { type: Number },
    maxPeople: { type: Number },
    desc: { type: String, default: false },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Room", RoomSchema);
