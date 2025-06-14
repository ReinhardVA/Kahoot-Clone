const User = require('../models/user')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_KEY

const register = async (req, res) => {
    const {username, email, password} = req.body

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        
        const user = new User({username, email, password: hashedPassword})
        await user.save();

        //const token = jwt.sign({id: user._id, username: user.username}, JWT_SECRET, {expiresIn: '1h'});

        console.log("User: ", user)
        res.redirect('/api/login')
        // res.status(201).json({
        //     message: "User registered successfully!",
        //     token
        // })
    } catch (error) {
        res.send("Registration failed: " + error.message)
    }
}

const login = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.findOne({username})
        if(!user) return res.status(400).json({ error: "User does not exist"});
        
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({ error: "password does not match"});
        
        const token = jwt.sign({id: user._id, username: user.username}, JWT_SECRET, {expiresIn: '1h'})
        
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 3600000
        })
        res.render("secret", {user});

    } catch (error) {
        res.send("Login failed: " + error.message)
    }
}


module.exports = {register, login}
