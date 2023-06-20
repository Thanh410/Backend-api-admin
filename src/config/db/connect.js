const mongoose = require("mongoose");

async function Connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Booking_App");
    console.log("Connect Successfully");
  } catch (err) {
    console.log("failured");
  }
}

module.exports = { Connect };
