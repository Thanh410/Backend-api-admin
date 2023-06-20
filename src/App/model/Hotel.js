const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HotelSchema = new Schema(
  {
    name: { type: String },
    type: { type: String },
    address: { type: String },
    title: { type: String },
    city: { type: String },
    distance: { type: Number },
    desc: { type: String },
    cheapestPrice: { type: Number },
    rooms: { type: [String] },
    featured: { type: Boolean },
    photos: { type: Array },
    rating: { type: Number, max: 5, min: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hotel", HotelSchema);
