const CourseRepository = require("../repository/courseRepository");

//create a new course
exports.createCourse = async (req,res,next) => {
    try{
        const {title,description} = req.body;
        const course = await CourseRepository.createCourse({title,description});
        res.status(201).json({message:"Course created successfully",course});
    }catch(error){
        next(error);
    }
}
//get all courses
exports.getCourses = async (res,next) => {
    try{
        const courses = await CourseRepository.getCourses();
        res.status(200).json({message:"Courses fetched successfully",courses});
    }catch(error){
        next(error);
    }
}

module.exports = {createCourse,getCourses};