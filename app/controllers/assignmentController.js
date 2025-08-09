const AssignmentRepository = require("../repository/assignmentRepository");

//create a new assignment
exports.createAssignment = async (req,res,next) => {
    try{
        const {title,courseId,content,dueDate} = req.body;
        const assignment = await AssignmentRepository.createAssignment({title,courseId,content,dueDate});
        res.status(201).json({message:"Assignment created successfully",assignment});
    }catch(error){
        next(error);
    }
}

//get all assignments by course id
eexports.getAssignmentsByCourseId = async (req, res) => {
    try {
        const { courseId } = req.params;
        const { page = 1, limit = 10 } = req.query;

        const result = await AssignmentRepository.getAssignmentsByCourseIDPaginated(courseId, page, limit);

        res.status(200).json({
            success: true,
            message: "Assignments retrieved.",
            data: result.data,
            pagination: result.pagination
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {createAssignment,getAssignments};