const express = require('express')
const router = express.Router()
const {createQuiz, getAllQuizzes, joinQuiz} = require('../controllers/auth.quiz')
const authMiddleware = require('../middleware/authMiddleware')
const Quiz = require('../models/quiz')
const {v4: uuidv4} = require('uuid')

router.get("/createQuiz", authMiddleware, (req, res) => {
    res.render('createQuiz')
})

router.post("/createQuiz", authMiddleware, createQuiz)

router.get('/quizList', getAllQuizzes)

router.post('/start-session/:quizId', async (req, res) => {
    const quizId = req.params.quizId;
    const sessionId = uuidv4()
    res.redirect(`/api/lobby/${sessionId}?quizId=${quizId}`)
})

router.get('/join', (req, res) => {
    res.render('join');
})

router.post('/join', joinQuiz)
module.exports = router