const express = require("express")
const mongoose = require("mongoose")
const favicon = require('serve-favicon')
const path = require('path')
const router = require("./router/MainRouter")
const PORT = process.env.PORT || 5000

const app = express()
app.use(favicon(path.join(__dirname, 'favicon.ico')))
app.use(express.json())
app.use("/", router)
async function start() {
    try {
        await mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser:true, useUnifiedTopology:true})
        app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))
    }catch (e) {
        console.log(e)
    }
}
start()