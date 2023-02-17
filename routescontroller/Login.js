
const {UserModel}=require("../model/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Login=async(req,res)=>{
    const {email,password}=req.body
    console.log(req.body)

    const alredyexist=await UserModel.find({email:email})
    if(alredyexist.length>0){
        
    try {
        bcrypt.compare(password,alredyexist[0].password,  function(err, result) {
            // result == true

            if(err){
                res.send({"mssg":err.message})
            }
            else if (result){
             const token= jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60), //1 hr
                            id: alredyexist[0]._id }, 'secrettocken');
            res.send({"mssg":"Login suceesfull","token":token})
            }
        });
       
        

    } catch (error) {
        
        res.status(400).send({"err":error.message})
        
    }
    }
    else{
        res.send("user Not exist")
    }



}

module.exports={Login}