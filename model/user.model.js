
const mongoose=require("mongoose")

const userShema=mongoose.Schema({
        name:String,
        email:String,
        password :String
        
})

const UserModel=mongoose.model("user",userShema)

module.exports={UserModel}

