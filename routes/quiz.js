const express = require('express')
const router = express.Router()
const {createQuiz} = require('../controllers/auth.quiz')
const authMiddleware = require('../middleware/authMiddleware')

router.get("/createQuiz", authMiddleware, (req, res) => {
    res.render('createQuiz')
})

router.post("/createQuiz", authMiddleware, createQuiz)

module.exports = router