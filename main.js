const express=require("express");
const router = require("./Router/Router");
const connection = require("./DB/db")
const port = 5667
const app= express()
app.use(express.json())//9olt l serveur li bsh yjik des format json +
connection()
app.listen(port,console.log(`server is runing at ${port}`))
app.use("/product",router)


