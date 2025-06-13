const express = require('express');
const Quiz = require('../models/quiz');
const router = express.Router()

router.get('/lobby/:sessionId', async (req, res) => {
    const { quizId } = req.query;
    console.log(quizId)
    const sessionId = req.params.sessionId;
    try {
        const quiz = await Quiz.findById(quizId)
        if(!quiz) return res.status(404).send("Quiz not found!")
        res.render('lobby', {quiz, sessionId})
    } catch (error) {
        res.send(error.message);
    }
});

module.exports = router