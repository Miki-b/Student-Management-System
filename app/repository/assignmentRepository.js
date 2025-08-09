const Assignment = require("../model/Assignment");
const paginate = require("../utils/paginate");

class AssignmentRepository {
    // Create new assignment
    async createAssignment({ title, courseId, content, dueDate }) {
        try {
            const existingAssignment = await Assignment.findOne({ title, content });
            if (existingAssignment) return null;
            const assignment = await Assignment.create({ title, courseId, content, dueDate });
            return assignment;
        } catch (error) {
            throw error;
        }
    }

    // Get assignments by course ID with pagination
    async getAssignmentsByCourseIDPaginated(courseId, page = 1, limit = 10) {
        try {
            return await paginate(
                Assignment,
                { courseId },
                { page: Number(page), limit: Number(limit), sort: { createdAt: -1 } }
            );
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new AssignmentRepository();
