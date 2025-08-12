import aiService from "../services/aiService.js";


exports.generateLessonPlan= async (req, res,next)=> {
    try {
      const data = await aiService.createLessonPlan(req.body);

      res.status(200).json({
        success: true,
        message: "Lesson plan generated successfully.",
        data,
      });
    } catch (error) {
      next(error)
    }
  }


