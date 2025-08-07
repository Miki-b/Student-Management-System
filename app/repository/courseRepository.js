const Course = require("../model/Course");

class CourseRepository{
    //create new course
    async createCourse ({title,description}) {
        try{
        const existingCourse = await Course.findOne({title,description});
        if(existingCourse){ return null }
        const course= await Course.create({title,description});
        return course
        }catch(error){
            throw error;
        }
    }
    //Get all courses
    async getCourses ()  {
        try{
            const course= await Course.find();
            return course
        }catch(error){
            throw error;
        }
    }
    
}

module.exports = new CourseRepository()