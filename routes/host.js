const express = require('express');
const Quiz = require('../models/quiz');
const router = express.Router()
const sessionMap = require('../sessionStore')

router.get('/hostLobby/:sessionId', async (req, res) => {
    const sessionId = req.params.sessionId;
    const quizId = sessionMap.get(sessionId)
    try {
        const quiz = await Quiz.findById(quizId)
        if(!quiz) return res.status(404).send("Quiz not found!")
        res.render('hostLobby', {quiz, sessionId})
    } catch (error) {
        res.send(error.message);
    }
});

module.exports = router