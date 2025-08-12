const express = require("express");
const router = express.Router();
const {generateLessonPlanValidator}= require("../validators/aiValidator")
const auth = require("../middleware/authMiddleware");
const checkRole = require("../middleware/roleMiddleware");
const aiService =require("../services/aiService")

// POST /ai/generate-lesson-plan
router.post("/generate-lesson-plan", auth, checkRole('teacher'), generateLessonPlanValidator,aiService.generateLessonPlan );

module.exports = router;