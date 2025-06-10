const express = require('express')
const router = express.Router()
const {register, login} = require("../controllers/auth.user")
const authMiddleware = require("../middleware/authMiddleware")

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', register)

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', login)

router.get('/profile', authMiddleware, (req, res) => {
    res.render('secret', {username: req.user.username})
})

router.get('logout', (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
})
module.exports = router