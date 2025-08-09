import aiService from "../services/aiService.js";

class AIController {
  async generateLessonPlan(req, res) {
    try {
      const data = await aiService.createLessonPlan(req.body);

      res.status(200).json({
        success: true,
        message: "Lesson plan generated successfully.",
        data,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default new AIController();
