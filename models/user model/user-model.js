const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique:true,
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

userSchema.statics.signup = async function (email, password) {
    const exists = await this.findOne({ email });

    if(exists){
        throw Error('Email already in use');
    }

    //mypassword into dakjda542
    // salt to make password to be different from the same password
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(password,salt);

    const user = await this.create({ email, password: hash })
    
    return user;

}

module.exports = mongoose.model("User",userSchema );