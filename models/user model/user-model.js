const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required:true,
        unique:true,
    },
    email:{
        type: String,
        required:true,
    }, 
    password:{
        type:String,
        required:true
    },
    
    displayedName:{
        type:String,
        default:'My Account'
    },
    isAdmin:{
        type:Boolean,
        default:false
    }

}, {timestamps:true})

//static sign up method

userSchema.statics.signup = async function (email,userName ,password) {
    const condition1 = await this.findOne({ userName });

    if(condition1){
        throw Error('User name already in use');
    }

    const condition2 = await this.findOne({ email });

    if(condition2){
        throw Error('Email already in use');
    }

    //mypassword into dakjda542
    // salt to make password to be different from the same password
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(password,salt);

    const user = await this.create({ email,userName, password: hash })
    
    return user;

}

module.exports = mongoose.model("User",userSchema );