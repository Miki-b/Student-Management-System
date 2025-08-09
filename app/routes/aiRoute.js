const express = require("express");
const router = express.Router();

router.post("/ai/generate-lesson-plan", auth, checkRole('teacher'), aiService.generatLessonPlan);

export default router;