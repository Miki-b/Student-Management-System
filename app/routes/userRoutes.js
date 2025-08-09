const express = require("express");
const router = express.Router();
const authService = require("../services/authService");

router.post("/auth/register", authService.register);
router.post("/auth/login", authService.login);
router.post("/auth/refresh-token", authService.refreshToken);
router.post("/auth/logout", authService.logout);

module.exports = router;
