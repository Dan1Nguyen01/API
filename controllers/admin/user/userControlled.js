const User = require('../../../models/user model/user-model');

//get all users
const getAllUser = async(req, res)=>{
    try{
        const user = await User.find()
        res.json(user);
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
//get a user
const getAUser = (req,res)=>{
    res.json(res.user)
}
//create a new user
const createUser = async (req, res) => {
    console.log('test', req.body)
    const user = new User({
      userName: req.body.userName,
      password: req.body.password,
      email:req.body.email,
      displayedName:req.body?.displayedName,
      isAdmin:req.body?.isAdmin
    })
    try {
      const newUser = await user.save()
      res.status(201).json(newUser)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }
//delete a new user

const updateUser  = async (req,res)=>{
    if(req.body.displayedName!= null){
        res.user.displayedName = req.body.displayedName;
    }

    if(req.body.password!= null){
        res.user.password = req.body.password;
    }

    try{
        const updatedUser = await res.user.save();
        res.json(updateUser);
    }catch(err){
        res.status(400).json({ message: err.message })
    }
}
//update a user
const deleteUser =async (req, res) => {
    try {
      await res.user.remove()
      res.json({ message: 'Deleted User' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }

async function getUser(req, res, next) {
    let user
    try {
      user = await User.findById(req.params.id)
      if (user == null) {
        return res.status(404).json({ message: 'Cannot find user' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.user = user
    next()
  }

  module.exports = {
    getAllUser,
    getAUser,
    createUser,
    updateUser,
    deleteUser
  }