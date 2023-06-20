const express = require("express");
const router = express.Router();
const hotelController = require("../App/controller/HotelController");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

router.post("/", verifyAdmin, hotelController.createHotel);
router.put("/:id", verifyAdmin, hotelController.updateHotel);
router.delete("/find/:id", verifyAdmin, hotelController.deleteHotel);
router.get("/find/:id", hotelController.getHotel);
router.get("/", hotelController.getHotels);

module.exports = router;
