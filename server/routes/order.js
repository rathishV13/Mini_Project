const router = require("express").Router()
const Order = require("../models/Order")
const {
    verifyToken,
    verifyAuthorizeToken,
    verifyAdminToken
} = require("./tokenVerification")


//Create Order
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body)

    try {
        const addedOrder = await newOrder.save()
        res.status(200).json(addedOrder)
    } catch (error) {
        res.status(501).json(error)
    }
})

//Update Order
router.put("/:id", verifyAdminToken, async (req, res) => {

    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        })

        res.status(200).json(updatedOrder)
    } catch (error) {
        res.status(501).json(error)
    }

})

//Delete Order
router.delete("/:id", verifyAdminToken, async (req, res) => {
    try {

        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Successfully Deleted Order")

    } catch (error) {
        res.status(501).json(error)
    }
})

//Get Orders of User
router.get("/find/:userID", verifyAuthorizeToken, async (req, res) => {
    try {

        const orders = await Order.find({
            userID: req.params.userID
        })
        res.status(200).json(orders)

    } catch (error) {
        res.status(501).json(error)
    }
})

//Get All Orders
router.get("/", verifyAdminToken, async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch (error) {
        res.status(501).json(error)
    }
})

//Get Stats Of Order
router.get("/statsOrder", verifyAdminToken, async (req, res) => {

    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const prevMonth = new Date(date.getMonth(lastMonth.getMonth() - 1))
    

    try {
        const income = await Order.aggregate([{
                $match: {
                    createdAt: {
                        $gte: prevMonth
                    }
                }
            },
            {
                $project: {
                    month: {
                        $month: "$createdAt"
                    },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: {
                        $sum: "$sales"
                    }
                }
            }
        ])
        
        res.status(200).json(income)

    } catch (error) {
        res.status(501).json(error)
    }

})

module.exports = router