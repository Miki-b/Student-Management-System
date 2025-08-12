const { validationResult } = require("express-validator");

// Middleware to run validation checks
const validate = (rules) => [
  ...rules,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        data: errors.array(),
        pagination: null
      });
    }
    next();
  }
];

module.exports = { validate };
