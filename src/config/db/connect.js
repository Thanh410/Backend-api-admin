const mongoose = require("mongoose");
require("dotenv").config();

async function Connect() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/Booking_App",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connect Successfully");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { Connect };
