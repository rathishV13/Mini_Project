const router = require("express").Router()
const User = require("../models/User")
const {verifyToken,verifyAuthorizeToken} = require("./tokenVerification")

router.put("/:id",verifyAuthorizeToken,async (req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASS).toString()
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true})

        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(501).json(error)
    }
})


module.exports = router
