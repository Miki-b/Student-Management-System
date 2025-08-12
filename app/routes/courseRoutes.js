const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const auth = require("../middleware/authMiddleware");
const checkRole = require("../middleware/roleMiddleware");
const {createCourseValidator,getCoursesValidator }= require("../validators/courseValidator")

router.post("/", auth, checkRole('teacher'),createCourseValidator,courseController.createCourse);
router.get("/", auth, checkRole('teacher', 'student'),getCoursesValidator,courseController.getCourses);


module.exports = router;