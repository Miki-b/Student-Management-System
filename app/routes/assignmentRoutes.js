const express = require("express");
const router = express.Router();
const assignmentController = require("../controllers/assignmentController");
const auth = require("../middleware/authMiddleware");
const checkRole = require("../middleware/roleMiddleware");
const {createAssignmentValidator,getAssignmentsByCourseValidator}=require("../validators/assignmentValidator")
router.post("/",  auth, checkRole('teacher'),createAssignmentValidator, assignmentController.createAssignment);
router.get("/course/:courseId", auth, checkRole('teacher', 'student'),getAssignmentsByCourseValidator,assignmentController.getAssignmentsByCourseId);

module.exports = router;