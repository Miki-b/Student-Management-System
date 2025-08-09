

const generateLessonPlan= async (topic, gradeLevel, objectives) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    Generate a detailed lesson plan for the topic "${topic}".
    Grade Level: ${gradeLevel}.
    Learning Objectives: ${objectives.join(", ")}.
    The plan should include an introduction, learning activities, and a conclusion.
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return text;
  }

class AIService {
  async createLessonPlan({ topic, gradeLevel, objectives }) {
    if (!topic || !gradeLevel || !objectives?.length) {
      throw new Error("Missing required fields: topic, gradeLevel, objectives");
    }

    const lessonPlan = await generateLessonPlan(
      topic,
      gradeLevel,
      objectives
    );

    return {
      lessonPlan,
      generatedAt: new Date(),
    };
  }
}

export default new AIService();
