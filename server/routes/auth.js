const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

//Register User
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASS).toString(),
    })

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(505).json(error)
    }

})

//Login User
router.post("/login", async (req, res) => {

    try {
        const user = await User.findOne({
                username: req.body.username
            })

            !user && res.status(401).json("Username Not Found")

        const hashPass = CryptoJS.AES.decrypt(user.password, process.env.SECRET_PASS)
        const pass = hashPass.toString(CryptoJS.enc.Utf8)

        pass !== req.body.password && res.status(401).json("Password Incorrect")

        const accessToken = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin
            },
            process.env.JWT_SECRET_PASS,
            {
                expiresIn:"3d"
            }
        )

        const {
            password,
            ...others
        } = user._doc

        res.status(200).json({...others, accessToken})

    } catch (error) {
        res.status(505).json(error)
    }

})

module.exports = router