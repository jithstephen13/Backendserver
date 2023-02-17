const express=require('express')
const { connection } = require('./confiq/db')
require('dotenv').config()
const cors=require("cors")
const { AppRoutes } = require('./routes/routes')

const PORT=process.env.PORT
const app=express()


app.use(cors())
app.use(express.json())


app.use("/",AppRoutes)



app.listen(PORT,async()=>{
    try {
        await connection 
        console.log("conected to DB")
    } catch (error) {
        
    }
    console.log("localhost:8080......")

})