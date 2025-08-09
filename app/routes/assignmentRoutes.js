const express = require("express");
const router = express.Router();
const assignmentController = require("../controllers/assignmentController");
const auth = require("../middleware/authMiddleware");
const checkRole = require("../middleware/roleMiddleware");

router.post("/assignments",  auth, checkRole('teacher'),assignmentController.createAssignment);
router.get("/assignments/course:courseId", auth, checkRole('teacher', 'student'),assignmentController.getAssignments);

module.exports = router;