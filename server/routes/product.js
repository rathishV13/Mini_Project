const router = require("express").Router()
const Product = require("../models/Product")
const {
    verifyToken,
    verifyAuthorizeToken,
    verifyAdminToken
} = require("./tokenVerification")


//Create Product
router.post("/", verifyAdminToken, async (req, res) => {
    const newProduct = new Product(req.body)

    try {
        const addedProduct = await newProduct.save()
        res.status(200).json(addedProduct)
    } catch (error) {
        res.status(501).json(error)
    }
})

//Update Product
router.put("/:id", verifyAdminToken, async (req, res) => {

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        })

        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(501).json(error)
    }
})

//Delete Product
router.delete("/:id", verifyAdminToken, async (req, res) => {
    try {

        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Successfully Deleted Product")

    } catch (error) {
        res.status(501).json(error)
    }
})

//Get Product
router.get("/find/:id", async (req, res) => {
    try {

        const product = await Product.findById(req.params.id)
        res.status(200).json(product)

    } catch (error) {
        res.status(501).json(error)
    }
})

//Get All Products
router.get("/", async (req, res) => {

    const queryNew = req.query.new
    const queryCategory = req.query.category
    try {
        let products

        if (queryNew) {
            products = await Product.find().sort({
                createdAt: -1
            }).limit(1)
        } else if (queryCategory) {
            products = await Product.find({
                category: {
                    $in: [queryCategory]
                }
            })
        } else {
            products = await Product.find()
        }

        res.status(200).json(products)

    } catch (error) {
        res.status(501).json(error)
    }
})


module.exports = router