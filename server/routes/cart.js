const router = require("express").Router()
const Cart = require("../models/Cart")
const {
    verifyToken,
    verifyAuthorizeToken,
    verifyAdminToken
} = require("./tokenVerification")


//Create Cart
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)

    try {
        const addedCart = await newCart.save()
        res.status(200).json(addedCart)
    } catch (error) {
        res.status(501).json(error)
    }
})

//Update Cart
router.put("/:id", verifyAuthorizeToken, async (req, res) => {

    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        })

        res.status(200).json(updatedCart)
    } catch (error) {
        res.status(501).json(error)
    }
})

//Delete Cart
router.delete("/:id", verifyAuthorizeToken, async (req, res) => {
    try {

        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Successfully Deleted Cart")

    } catch (error) {
        res.status(501).json(error)
    }
})

//Get Cart of User
router.get("/find/:userID", verifyAuthorizeToken, async (req, res) => {
    try {

        const cart = await Cart.findOne({
            userID: req.params.userID
        })
        res.status(200).json(cart)

    } catch (error) {
        res.status(501).json(error)
    }
})

//Get All 
router.get("/", verifyAdminToken, async (req, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        res.status(501).json(error)
    }
})

module.exports = router