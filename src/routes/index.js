const authRouter = require("./auth");
const hotelRouter = require("./hotels");
const userRouter = require("./users");
const roomRouter = require("./rooms");

function route(app) {
  app.use("/api/auth", authRouter);
  app.use("/api/hotels", hotelRouter);
  app.use("/api/users", userRouter);
  app.use("/api/rooms", roomRouter);
}

module.exports = route;
