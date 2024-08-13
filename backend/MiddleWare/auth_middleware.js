const jwt =require('jsonwebtoken')
const User =require('../Models/User.js')

const checkUserAuth=async(req,res,next)=>{
    let token;
    const {authorization}=req.headers;
    if(authorization&&authorization.startsWith('Bearer'))
        {
          try {
            token=authorization.split(' ')[1];
            const {USER_id}=jwt.verify(token,process.env.JWT_TOKEN,async(err,user)=>{
              if(err)
                {
                           res.send({"status":"failed","message":"Some Internal Error"})
                }
                else{
                  req.user=await User.findById(user.USER_id).select('-password');
                }
              next();
            });
        } catch (error) {
            res.send({ "status": "failed", "message": "Unauthorized User" });
          }
        }
        else{
            res.send({ "status": "failed", "message": "Unauthorized user" });
    }
        }
        module.exports=checkUserAuth;

