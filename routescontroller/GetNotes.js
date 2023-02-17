const {postModel}=require("../model/post.model")
const Getnode=async(req,res)=>{

    try {
        let todo=await postModel.find({})
        console.log(todo)
        res.send(todo)
    } catch (error) {
        res.status(404).send(error)
    }
 

}
module.exports={Getnode}


