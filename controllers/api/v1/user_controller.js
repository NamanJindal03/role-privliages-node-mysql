const db = require('../../../config/mysql')
const User = require('../../../models/user');

const jwt = require('jsonwebtoken');
const expressJwt  = require('express-jwt');

//to access environment variables
require('dotenv').config();

//registers a new user
module.exports.register = async (req, res) =>{
    const{name, email, password, confirm_password} = req.body;
    if(password != confirm_password){
        console.log("password", password);
        console.log("confirm_password", confirm_password);
        console.log("pass do not match")
        return res.status(404).json({  error: "pass do not match"});
    }

    //Checks whether email already exists or not
    try{
        const user = await User.findOne({ where: { email: email } });
        //if email doesnt exist in db then register the user
        if(!user){
            User.create({
                name, 
                email,
                password
            })
            .then(()=>{
                console.log('user succesfully created');
                return res.status(200).json({  message: "user succesfully registered"});
            })
            .catch((err)=>{
                console.log(err);
                return res.status(400).json({  error: "error in creating user"});
            })
               
        }  
        //else it returns that you are already registered
        else{
            return res.status(404).json({ error: "user already registered"});
        }
    }
    catch(err){
        console.log(err);
        return res.status(404).json({ status: 404, error: "There is an error in finding user in db"});
    }
    
}

module.exports.login = async (req,res) =>{
    const {email, password} = req.body;
    try{
        const user = await User.findOne({ where: { email: email } })
            
        //if the user doesnt exist or the password dont match return error  
        
        if(!user || (user.password != password)){
            console.log("wrong password");
            return res.status(400).json({error: "Invalid Username/Password"})
        }

        //if user exist we 
        //create token
        //default encryption algorithm = HMAC SHA 256
        const token = jwt.sign({ _id: user.id }, process.env.JWTSECRET, {algorithm: 'HS256'});
        //put token in cookie
        res.cookie("token", token, {expire: new Date() + 9999});
        
        //sending response to frontend
        return res.json({token});
    }
    catch(err){
        console.log(err);
        return res.status(404).json({ status: 404, error: "There is an error in finding user in db"});
    }
    
}

module.exports.logout = (req,res) => {
    res.clearCookie("token");
    return res.status(200).json({message:"user signed out succesfully"})
}

// //check whether a valid token is present or not and hence help in authentication of the user
module.exports.isSignedIn = expressJwt({
    secret: process.env.JWTSECRET,
    algorithms: ['HS256'],
    //this user property appends auth to our req and if we log it then we get _id & iat
    //_id is the one stored in the database
    //if we log req.auth then we get _id and iat 
    userProperty: "auth"   
});

// //custom middlewares 
// module.exports.isAuthenticated = (req, res, next) =>{
//     //req.profile is going to be set from the frontend
//     console.log("in isAuthenticated",req.profile)
//     let checker = req.profile && req.auth && req.profile._id == req.auth._id;
//     if(!checker){
//         res.status(403).json({
//             error: "ACCESS DENIED"
//         })
//     }
//     next();
// }