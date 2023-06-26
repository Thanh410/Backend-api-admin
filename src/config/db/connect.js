const mongoose = require("mongoose");
require("dotenv").config();

async function Connect() {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/Booking_App");
    console.log("Connect Successfully");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { Connect };
