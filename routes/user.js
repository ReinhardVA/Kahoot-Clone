const express = require('express')
const router = express.Router()
const {register, login} = require("../controllers/auth")


router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', register)

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', login)

router.get('/secret', (req, res) => {
    res.render("secret")
})
module.exports = router