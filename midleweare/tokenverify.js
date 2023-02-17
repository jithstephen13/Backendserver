const jwt = require('jsonwebtoken');
const tokenveyfy= (req,res,next)=>{
    var token=req.headers.authorization
            jwt.verify(token, 'secrettocken', function(err, decoded) {
                //console.log(decoded) // bar
                if(decoded&&decoded.exp > (new Date().getTime() + 1) / 1000){
                   req.body.user=decoded.id
                       next()
                }
                else{
                    res.send({mssg:"plzzzzz login "})
                }
            });
}

module.exports={tokenveyfy}