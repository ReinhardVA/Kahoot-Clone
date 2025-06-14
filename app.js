const express = require('express')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const userRoute = require("./routes/user")
const quizRoute = require("./routes/quiz")
const hostRoute = require("./routes/host")
const app = express()

app.set("view engine", "ejs")

connectDB()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use('/api', userRoute)
app.use('/api', quizRoute)
app.use('/api', hostRoute)

app.get('/', (req, res) => {
    res.render("home")
})

module.exports = app;