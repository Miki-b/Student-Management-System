const { body } = require("express-validator");
const { validate } = require("./commonValidator");

const registerValidator = validate([
  body("username")
    .isLength({ min: 3, max: 30 }).withMessage("Username must be 3–30 characters"),
  body("email")
    .isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  body("role")
    .isIn(["student", "parent", "teacher", "admin"]).withMessage("Invalid role"),
]);

const loginValidator = validate([
  body("email").isEmail().withMessage("Invalid email format"),
  body("password").notEmpty().withMessage("Password is required"),
]);

const refreshTokenValidator = validate([
  body("token").notEmpty().withMessage("Refresh token is required"),
]);

const logoutValidator = validate([
  body("token").notEmpty().withMessage("Refresh token is required"),
]);

module.exports = {
  registerValidator,
  loginValidator,
  refreshTokenValidator,
  logoutValidator
};
