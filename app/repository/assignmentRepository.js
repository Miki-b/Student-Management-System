const Assignment = require("../model/Assignment");

class Assignment{
    //create new assignment
    async createAssignment ({title,courseId,content,dueDate})  {
        try{
            const existingAssignment = await Assignment.findOne({title,content});
            if(existingAssignment){ return null }
            const assignment= await Assignment.create({title,courseId,content,dueDate});
            return assignment
        }catch(error){
                throw error;
        }
    }
    //Get assignments by course id
    async getAssignmentbyCourseID (courseId)  {
        try{
            const assignment= await Assignment.find({courseId});
            return assignment
        }catch(error){
            throw error;
        }
    }
    
}

module.exports = new Assignment()