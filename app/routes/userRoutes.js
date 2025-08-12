const express = require("express");
const router = express.Router();
const authService = require("../services/authService");
const { registerValidator, loginValidator, refreshTokenValidator, logoutValidator } = require("../validators/authValidator");


router.post("/register", registerValidator, authService.register);
router.post("/login", loginValidator, authService.login);
router.post("/refresh-token", refreshTokenValidator, authService.refreshToken);
router.post("/logout", logoutValidator, authService.logout);

module.exports = router;
