const router = require("express").Router()
const User = require("../models/User")
const {
    verifyToken,
    verifyAuthorizeToken,
    verifyAdminToken
} = require("./tokenVerification")

//Update User
router.put("/:id", verifyAuthorizeToken, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASS).toString()
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        })

        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(501).json(error)
    }
})

//Delete User
router.delete("/:id", verifyAuthorizeToken, async (req, res) => {
    try {

        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Successfully Deleted User")

    } catch (error) {
        res.status(501).json(error)
    }
})

//Get User
router.get("/find/:id", verifyAdminToken, async (req, res) => {
    try {

        const user = await User.findById(req.params.id)

        const {
            password,
            ...others
        } = user._doc

        res.status(200).json(others)

    } catch (error) {
        res.status(501).json(error)
    }
})

//Get All User
router.get("/", verifyAdminToken, async (req, res) => {

    const query = req.query.new
    try {

        const users = query ? await User.find().sort({
            _id: -1
        }).limit(5) : await User.find()
        res.status(200).json(users)

    } catch (error) {
        res.status(501).json(error)
    }
})

//Get Stats Of User
router.get("/statsUser", verifyAdminToken, async (req, res) => {

    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear - 1))
    

    try {
        const dataSet = await User.aggregate([{
                $match: {
                    createdAt: {
                        $gte: lastYear
                    }
                }
            },
            {
                $project: {
                    month: {
                        $month: "$createdAt"
                    },
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: {
                        $sum: 1
                    }
                }
            }
        ])
        
        res.status(200).json(dataSet)

    } catch (error) {
        res.status(501).json(error)
    }

})

module.exports = router