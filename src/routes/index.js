const authRouter = require("./auth");
const hotelRouter = require("./hotels");
const userRouter = require("./users");
const roomRouter = require("./rooms");
const emailRouter = require("./email");

function route(app) {
  app.use("/api/auth", authRouter);
  app.use("/api/hotels", hotelRouter);
  app.use("/api/users", userRouter);
  app.use("/api/rooms", roomRouter);
  app.use("/api", emailRouter);
}

module.exports = route;
