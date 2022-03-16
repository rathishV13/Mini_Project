const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    const headerAuth = req.headers.token

    if (headerAuth) {

        const token = headerAuth.split(" ")[1]


        jwt.verify(token, process.env.JWT_SECRET_PASS, (err, user) => {
            if (err) res.status(403).json("Token Is Not Valid")
            req.user = user
            next()
        })
    } else {
        return res.status(401).json("Authentication Failed")
    }
}

const verifyAuthorizeToken = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        }else{
            res.status(403).json("No Access")
        }
    })
}


module.exports = {
    verifyToken,
    verifyAuthorizeToken
}