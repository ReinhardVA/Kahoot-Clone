const express = require('express')
const connectDB = require('./config/db')
const userRoute = require("./routes/user")
const app = express()
const PORT = process.env.PORT || 3000
app.set("view engine", "ejs")
connectDB()

app.use(express.json())

app.use('/api', userRoute)

app.get('/', (req, res) => {
    res.render("home")
})
app.listen(PORT, () => {
    console.log('Server started on port ', PORT)
})
