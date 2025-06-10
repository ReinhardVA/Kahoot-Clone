const express = require('express')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const userRoute = require("./routes/user")
const quizRoute = require("./routes/quiz")
const app = express()
const PORT = process.env.PORT || 3000
app.set("view engine", "ejs")

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use('/api', userRoute)
app.use('/api', quizRoute)

app.get('/', (req, res) => {
    res.render("home")
})
app.listen(PORT, () => {
    console.log('Server started on port ', PORT)
})
