const {postModel}=require("../model/post.model")
const Deletenode=async(req,res)=>{
    const id=req.params.id
  


    try {
       await postModel.findByIdAndDelete({_id:id})
        res.status(200).send("Deleted")
    } catch (error) {
        res.status(404).send(error)
    }
 

}
module.exports={Deletenode}