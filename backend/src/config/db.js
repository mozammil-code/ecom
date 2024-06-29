const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://admin:8NRUrXtC9vQ6h0i9@cluster0.ip3iwah.mongodb.net/blogApp?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}