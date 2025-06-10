const Quiz = require('../models/quiz')

const createQuiz = async (req, res) => {
    const {title, questions} = req.body
    try{
        console.log(req.body)
        const quiz = new Quiz({
            title,
            createdBy: req.user.id,
            questions: Object.values(questions)
        });
        await quiz.save();
        res.send("Quiz created successfully!")
    } catch(error){
        res.status(500).send(error.message)
    }
}

module.exports = {createQuiz}