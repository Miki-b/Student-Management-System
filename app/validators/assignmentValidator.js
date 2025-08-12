const { body, param, query } = require("express-validator");
const { validate } = require("./commonValidator");

const createAssignmentValidator = validate([
  body("title")
    .isLength({ min: 3 }).withMessage("Title must be at least 3 characters"),
  body("courseId")
    .isMongoId().withMessage("Invalid courseId format"),
  body("content")
    .isLength({ min: 5 }).withMessage("Content must be at least 5 characters"),
  body("dueDate")
    .isISO8601().withMessage("Invalid due date format"),
]);

const getAssignmentsByCourseValidator = validate([
  param("courseId").isMongoId().withMessage("Invalid courseId format"),
  query("page").optional().isInt({ min: 1 }).withMessage("Page must be >= 1").toInt(),
  query("limit").optional().isInt({ min: 1, max: 100 }).withMessage("Limit must be between 1–100").toInt(),
]);

module.exports = {
  createAssignmentValidator,
  getAssignmentsByCourseValidator
};
