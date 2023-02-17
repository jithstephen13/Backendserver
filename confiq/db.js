const mongoose=require("mongoose")

require("dotenv").config()
mongoose.set('strictQuery', false)

const MongoURL=process.env.MongoURL

const connection= mongoose.connect(`${MongoURL}`)

module.exports={connection}
