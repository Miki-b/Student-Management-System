const AssignmentRepository = require("../repository/assignmentRepository");

// Create a new assignment
exports.createAssignment = async (req, res, next) => {
  try {
    const { title, courseId, content, dueDate } = req.body;
    const assignment = await AssignmentRepository.createAssignment({
      title,
      courseId,
      content,
      dueDate,
    });
    res.status(201).json({
      success: true,
      message: "Assignment created successfully",
      data: assignment,
    });
  } catch (error) {
    next(error);
  }
};

// Get all assignments by course ID
exports.getAssignmentsByCourseId = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const { page = 1, limit = 10 } = req.query;

    const result = await AssignmentRepository.getAssignmentsByCourseIDPaginated(
      courseId,
      Number(page),
      Number(limit)
    );

    res.status(200).json({
      success: true,
      message: "Assignments retrieved.",
      data: result.data,
      pagination: result.pagination,
    });
  } catch (error) {
    next(error);
  }
};


