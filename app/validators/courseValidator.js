const { body, query } = require("express-validator");
const { validate } = require("./commonValidator");

const createCourseValidator = validate([
  body("title")
    .isLength({ min: 3 }).withMessage("Title must be at least 3 characters"),
  body("description")
    .isLength({ min: 5 }).withMessage("Description must be at least 5 characters"),
]);

const getCoursesValidator = validate([
  query("page").optional().isInt({ min: 1 }).withMessage("Page must be >= 1").toInt(),
  query("limit").optional().isInt({ min: 1, max: 100 }).withMessage("Limit must be between 1–100").toInt(),
]);

module.exports = {
  createCourseValidator,
  getCoursesValidator
};
