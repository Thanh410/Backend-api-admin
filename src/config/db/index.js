const mongoose = require("mongoose");
require("dotenv").config();

async function Connect() {
  try {
<<<<<<< HEAD
    await mongoose.connect(process.env.MONGODB, {
=======
    await mongoose.connect(process.env.MONGODB || "mongodb://0.0.0.0:27017/Booking_App", {
>>>>>>> cb14279010f0c3e7ec72b2410c0e00983a1672c8
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect Successfully");
  } catch (err) {
    console.log(err);
  }
}

module.exports = Connect;
