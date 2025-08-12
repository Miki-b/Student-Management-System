const CourseRepository = require("../repository/courseRepository");

// Create a new course
exports.createCourse = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const course = await CourseRepository.createCourse({ title, description });
    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

// Get all courses
exports.getCourses = async (req, res, next) => {
  try {
    const courses = await CourseRepository.getCourses();
    res.status(200).json({
      success: true,
      message: "Courses fetched successfully",
      data: courses,
    });
  } catch (error) {
    next(error);
  }
};

