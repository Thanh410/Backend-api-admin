const express = require("express");
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 3001;
const app = express();
const db = require("./config/db/connect");
const morgan = require("morgan");
const route = require("./routes");
const cookieParser = require("cookie-parser");

// middle wares
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.get("/", (req, res, next) => {
  res.setHeader("Access-Controller-Allow-Credential", "true");
  res.send("API is running ...");
});
// Connect DB
db.Connect();
// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});