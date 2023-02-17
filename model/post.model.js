
const mongoose=require("mongoose")

const postShema=mongoose.Schema({
        name:{type:String,required:true},
        body:{type:String,required:true},
        user :{type:String,required:true}
        
})

const postModel=mongoose.model("post",postShema)

module.exports={postModel}