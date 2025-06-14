const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_KEY

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if(!token) return res.redirect("/api/login");

    try{
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded;
        next()
    } catch(error){
        res.send("Invalid token: " + error.message)
    }
}

module.exports = authMiddleware