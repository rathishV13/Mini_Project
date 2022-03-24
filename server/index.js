const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")

dotenv.config()

app.use(cors())

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/cart", cartRoute)
app.use("/api/orders", orderRoute)

if(process.env.NODE_ENV !== "test"){

    mongoose.connect(
        process.env.MONGO_DB_URL
    ).then(()=>
        console.log("DB Connected!")
    ).catch((err)=>{
        console.log(err)
    })

    app.listen(process.env.PORT || 5000, ()=>{
        console.log("Server is Running Port Number: "+process.env.PORT)
    })

}else if (process.env.NODE_ENV === "test"){

    mongoose.connect(
        process.env.MONGO_DB_URL_TEST
    ).then(()=>
        console.log("TEST DB Connected!")
    ).catch((err)=>{
        console.log(err)
    })
    
    module.exports = app.listen(3000);
}


