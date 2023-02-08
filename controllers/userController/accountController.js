const User  = require('../../models/user model/user-model')
//login user
const loginUser = async (req,res) =>{

}

//sign up user

const signupUser = async(req,res)=>{

    const {email,userName, password,isAdmin,displayedName} = req.body;

    try{ 
        const user = await User.signup(email,userName, password);
        res.status(200).json({email,userName, user});
    }catch(err){
        res.status(400).json({err:err.message});
    }
}
module.exports={
    loginUser,
    signupUser
}