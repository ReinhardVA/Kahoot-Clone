const User = require('../models/user')

const register = async (req, res) => {
    const {username, email, password} = req.body

    try {
        const user = new User({username, email, password})
        // Token ve hashing buraya
        
        await user.save();

        console.log("User: ", user)
        res.status(201).json({
            message: "User registered successfully!",
            user
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const login = async (req, res) => {
    try {
        
        const user = await User.findOne({username: req.body.username})
        if(!user) return res.status(400).json({ error: "User does not exist"});
        
        const isMatch = req.body.password === user.password;
        if(!isMatch) return res.status(400).json({ error: "password does not match"});
        
        res.render("secret")

    } catch (error) {
        res.status(400).json({error});
    }
}

// Kullanıcı girişi için veritabanından veri getirilecek.

module.exports = {register, login}
