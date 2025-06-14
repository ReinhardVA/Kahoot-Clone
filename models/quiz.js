const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: [true, "You need to enter a question"],
        unique: true
    },
    options:{
        type: Map,
        of: String,
        required: [true, "You need to enter four option"],
    },
    correctIndex:{
        type: String, // A, B, C, D
        required: true
    }
});

const QuizSchema = new mongoose.Schema({
    title: String,
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    questions: [QuestionSchema]
});

const Quiz = mongoose.model("Quiz", QuizSchema)
module.exports = Quiz