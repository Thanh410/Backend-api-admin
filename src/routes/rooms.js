const express = require("express");
const router = express.Router();
const roomController = require("../App/controller/RoomController");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

router.post("/:hotelId", roomController.createRoom);
router.put("/:id", verifyAdmin, roomController.updateRoom);
router.delete("/find/:id", verifyAdmin, roomController.deleteRoom);
router.get("/find/:id", roomController.getRoom);
router.get("/", roomController.getRooms);

module.exports = router;
