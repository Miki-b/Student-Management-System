const { body } = require("express-validator");
const { validate } = require("./commonValidator");

const generateLessonPlanValidator = validate([
  body("topic")
    .isLength({ min: 3 }).withMessage("Topic must be at least 3 characters"),
  body("gradeLevel")
    .isLength({ min: 1 }).withMessage("Grade level is required"),
  body("objectives")
    .isArray({ min: 1 }).withMessage("Objectives must be an array with at least one item"),
  body("objectives.*")
    .isString().withMessage("Each objective must be a string"),
]);

module.exports = {
  generateLessonPlanValidator
};
