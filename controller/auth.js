const User = require("../models/user");

exports.signup = async(req,res)=>{
    const {name, email, password} = req.body;
    try{
        const find = await User.find({email});
        if(find){
            return res.status(404).json({message: "User already exist"});
        }

        await User.create({name,email,password});
    }
    catch(err){
        console.log(err);
    }
}

exports.login = async(req,res)=>{
    const {email, password} = req.body;
    try{
        const find = await User.find({email});
        if(!find){
            return res.status(404).json({message: "User doesn't exist"});
        }
        if(password != find.password){
            return res.status(404).json({message: "InvalidCredentials"});
        }
    }
    catch(err){
        console.log(err);
    }
}