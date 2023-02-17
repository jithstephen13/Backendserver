const { UserModel } = require("../model/user.model")
const bcrypt = require('bcrypt');

const Register=async(req,res)=>{
    const {name,email,password}=req.body

    const alredyexist=await UserModel.find({email})
        if(alredyexist.length<1){
        
                    try {
                        bcrypt.hash(password, 5, function(err, hash) {
                            // Store hash in your password DB.
                            console.log(hash)
                            if(err) res.send("error occure")
                            else{
                                const user=new UserModel({name,password:hash,email})
                                    user.save()
                                    res.status(200).send("Signup succefully")
                               }
                       })
                       } catch (error) {
                        res.status(400).send({"err":error.message})
                       }
    }
    else{
        res.send("user Already exist")
    }



}

module.exports={Register}