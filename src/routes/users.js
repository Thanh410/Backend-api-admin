const express = require("express");
const router = express.Router();
const userController = require("../App/controller/UserController");
const { verifyAdmin, verifyUser } = require("../utils/verifyToken");

router.put("/:id", verifyUser, userController.updateUser);
router.delete("/find/:id", verifyUser, userController.deleteUser);
router.get("/find/:id", verifyUser, userController.getUser);
router.get("/", verifyAdmin, userController.getUsers);

module.exports = router;
