const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    },
    {
        timestamps: true
    });
    module.exports = mongoose.model('Course', courseSchema);