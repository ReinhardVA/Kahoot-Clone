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

const getAllQuizzes = async(req, res) =>{
    const allQuizzes = await Quiz.find();
    res.render('quizList', {quizzes: allQuizzes})
}

const joinQuiz = async (req, res) => {
    const {sessionId} = req.body;

    res.redirect(`/api/lobby/${sessionId}`)
}
module.exports = {createQuiz, getAllQuizzes, joinQuiz}


/*
    Üye ve Giriş sistemi ✅
    Quiz oluşturma ve kaydetme ✅
    Lobi oluşturma ✅
    Lobiye katılım ❌
    Oyun başlatma, Her soruyu bastırma, Sorular arasında puan tablosu, Her soruda geri sayım
*/