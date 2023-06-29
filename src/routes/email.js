const express = require("express");
const router = express.Router();
const emailController = require("../App/controller/EmailController");

router.post("/send_recovery_email", emailController.sendEmail);

module.exports = router;
