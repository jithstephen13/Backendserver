const {postModel}=require("../model/post.model")
const Updatenode=async(req,res)=>{
    const id=req.params.id
    const payload=req.body
    const  post =await postModel.findOne({_id:id})

     let  userinnote=post.user
     let userlogin=req.body.user


     if(userinnote!=userlogin){
        res.status(404).send({"error":"user is not autherised"})
     }
     else{

        try {
       await postModel.findByIdAndUpdate({_id:id},payload)
        res.status(200).send("Updated")
        } 
       catch (error) {
        res.status(404).send(error)
      }
}

}


module.exports={Updatenode}