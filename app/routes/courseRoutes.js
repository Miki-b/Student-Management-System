const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const auth = require("../middleware/authMiddleware");
const checkRole = require("../middleware/roleMiddleware");

router.post("/courses", auth, checkRole('teacher'),courseController.createCourse);
router.get("/courses", auth, checkRole('teacher', 'student'),courseController.getCourses);


module.exports = router;